import { readFileSync } from "node:fs";
import path from "node:path";
import mysql from "mysql2/promise";

const databaseNamePattern = /^[A-Za-z0-9_]+$/;
let pool: mysql.Pool | null = null;
let schemaReady: Promise<void> | null = null;

function mysqlConfig() {
  const host = process.env["MYSQL_HOST"];
  const user = process.env["MYSQL_USER"];
  const database = process.env["MYSQL_DATABASE"];
  if (!host || !user || !database || !databaseNamePattern.test(database)) return null;
  const port = Number(process.env["MYSQL_PORT"] ?? "3306");
  return {
    host,
    user,
    database,
    port: Number.isInteger(port) && port > 0 ? port : 3306,
    password: process.env["MYSQL_PASSWORD"] ?? "",
    waitForConnections: true,
    connectionLimit: 10,
  };
}

export function getPool() {
  const config = mysqlConfig();
  if (!config) return null;
  pool ??= mysql.createPool(config);
  return pool;
}

export async function ensureSchema(db: mysql.Pool) {
  if (!schemaReady) {
    schemaReady = db
      .query(readFileSync(path.join(process.cwd(), "db/schema.sql"), "utf8"))
      .then(() => undefined)
      .catch((error: unknown) => {
        schemaReady = null;
        throw error;
      });
  }
  return schemaReady;
}
