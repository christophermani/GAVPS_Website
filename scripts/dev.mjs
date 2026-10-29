import { spawn } from "node:child_process";
import path from "node:path";

const bin = (name) => path.join("node_modules", ".bin", name);
const children = [
  spawn(bin("tsx"), ["--env-file=.env", "server/index.ts"], { stdio: "inherit" }),
  spawn(bin("vite"), ["--port", "3000"], { stdio: "inherit" }),
];

function stop() {
  for (const child of children) child.kill("SIGTERM");
}

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
