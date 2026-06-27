import { spawn } from "node:child_process";
import { copyFileSync, cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PORT = Number(process.env.GH_PAGES_PRERENDER_PORT || 34567);
const BASE = "/executive-ai-edge-lovable";
const DIST = "dist";
const CLIENT_ASSETS = join(DIST, "client", "assets");
const ASSETS = join(DIST, "assets");

async function waitForServer(url, maxAttempts = 60) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // preview server still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Preview server did not start at ${url}`);
}

if (!existsSync(CLIENT_ASSETS)) {
  throw new Error(`Expected client assets at ${CLIENT_ASSETS}. Run "npm run build" first.`);
}

cpSync(CLIENT_ASSETS, ASSETS, { recursive: true });

const preview = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
  stdio: "ignore",
  shell: process.platform === "win32",
});

try {
  const url = `http://127.0.0.1:${PORT}${BASE}/`;
  await waitForServer(url);
  const html = await (await fetch(url)).text();
  writeFileSync(join(DIST, "index.html"), html);
  copyFileSync(join(DIST, "index.html"), join(DIST, "404.html"));
} finally {
  preview.kill();
}

for (const dir of ["client", "server"]) {
  const path = join(DIST, dir);
  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true });
  }
}
