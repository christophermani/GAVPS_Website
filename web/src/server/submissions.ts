import { randomUUID } from "node:crypto";
import type { Submission } from "@/lib/submission-schema";
import { emptyToNull, submissionIsLimited, submissionMessages } from "@/lib/submission-messages";
import { ensureSchema, getPool } from "@/server/db";

export type SubmissionResult = { ok: boolean; message: string };

export async function saveSubmission(data: Submission): Promise<SubmissionResult> {
  const pool = getPool();
  if (!pool) return { ok: false, message: submissionMessages.unavailable };

  let connection;
  try {
    connection = await pool.getConnection();
  } catch (error) {
    console.error("MySQL connection failed");
    if (error instanceof Error) console.error(error.name);
    return { ok: false, message: submissionMessages.unavailable };
  }

  try {
    await ensureSchema(pool);
    await connection.beginTransaction();
    const [rows] = await connection.query(
      "SELECT COUNT(*) AS total FROM foundation_submissions WHERE email = ? AND created_at > (NOW() - INTERVAL 1 HOUR)",
      [data.email],
    );
    const recentCount = Number((rows as Array<{ total: number }>)[0]?.total ?? 0);
    if (submissionIsLimited(recentCount)) {
      await connection.rollback();
      return { ok: false, message: submissionMessages.saveFailed };
    }

    await connection.query(
      `INSERT INTO foundation_submissions
        (id, kind, name, email, phone, city, interest, skills, availability, message, blood_group, consent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        randomUUID(),
        data.kind,
        data.name.trim(),
        data.email.trim(),
        emptyToNull(data.phone),
        emptyToNull(data.city),
        emptyToNull(data.interest),
        emptyToNull(data.skills),
        emptyToNull(data.availability),
        emptyToNull(data.message),
        emptyToNull(data.blood_group),
      ],
    );
    await connection.commit();
    return { ok: true, message: submissionMessages.received };
  } catch (error) {
    try {
      await connection.rollback();
    } catch {
      // The connection may not have an open transaction.
    }
    console.error("Submission save failed");
    if (error instanceof Error) console.error(error.name);
    return { ok: false, message: submissionMessages.saveFailed };
  } finally {
    connection.release();
  }
}
