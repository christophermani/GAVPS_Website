import { readFileSync } from "node:fs";
import path from "node:path";
import mysql from "mysql2/promise";

const database = process.env.MYSQL_DATABASE ?? "";
if (!/^[A-Za-z0-9_]+$/.test(database) || !process.env.MYSQL_HOST || !process.env.MYSQL_USER) {
  console.error(
    "Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE before initializing the database.",
  );
  process.exit(1);
}

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT ?? 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD ?? "",
  multipleStatements: true,
});

await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
await connection.query(`USE \`${database}\``);
await connection.query(readFileSync(path.join(process.cwd(), "db/schema.sql"), "utf8"));
await connection.end();
console.log(`MySQL database "${database}" is ready.`);
