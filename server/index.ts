import express from "express";
import path from "node:path";
import { submissionSchema } from "../src/lib/submission-schema";
import { submissionMessages } from "../src/lib/submission-messages";
import { saveSubmission } from "../src/server/submissions";

const app = express();
app.use(express.json());

app.post("/api/submissions", async (request, response) => {
  const parsed = submissionSchema.safeParse(request.body);
  const issue = parsed.success ? undefined : parsed.error.issues[0];
  if (!parsed.success) {
    response.status(400).json({ ok: false, message: issue?.message ?? submissionMessages.invalid });
    return;
  }

  const result = await saveSubmission(parsed.data);
  const status = result.ok ? 200 : result.message === submissionMessages.unavailable ? 503 : 429;
  response.status(status).json(result);
});

if (process.env["NODE_ENV"] === "production") {
  const dist = path.join(process.cwd(), "dist");
  app.use(express.static(dist));
  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(path.join(dist, "index.html"));
  });
}

const port = Number(
  process.env["PORT"] ?? (process.env["NODE_ENV"] === "production" ? 3000 : 3001),
);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
