import { createServer } from "node:http";
import { copyFileSync, cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const BASE = "/";
const CUSTOM_DOMAIN = "alymetwaly.com";
const DIST = "dist";
const CLIENT = join(DIST, "client");
const CLIENT_ASSETS = join(CLIENT, "assets");
const ASSETS = join(DIST, "assets");
const SERVER_ENTRY = join(DIST, "server", "server.js");

async function startSsrServer() {
  const handler = (await import(pathToFileURL(SERVER_ENTRY).href)).default;

  const server = createServer(async (req, res) => {
    try {
      const host = req.headers.host ?? "127.0.0.1";
      const url = new URL(req.url ?? "/", `http://${host}`);
      const headers = new Headers();
      for (const [key, value] of Object.entries(req.headers)) {
        if (value === undefined) continue;
        headers.set(key, Array.isArray(value) ? value.join(", ") : value);
      }

      const response = await handler.fetch(new Request(url, { method: req.method, headers }), {}, {});
      res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
      res.end(Buffer.from(await response.arrayBuffer()));
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end(error instanceof Error ? error.message : String(error));
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to resolve SSR preview server port.");
  }

  return { server, port: address.port };
}

function stopServer(server) {
  return new Promise((resolve) => {
    server.close(() => resolve());
  });
}

async function waitForPage(url, maxAttempts = 60) {
  let lastStatus = null;
  let lastError = null;

  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      lastStatus = res.status;
      if (res.ok) return res;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  const detail = lastError instanceof Error ? lastError.message : lastError ? String(lastError) : null;
  throw new Error(
    `SSR preview did not return a successful response for ${url}` +
      (lastStatus != null ? ` (last status: ${lastStatus})` : "") +
      (detail ? `\n${detail}` : ""),
  );
}

if (!existsSync(CLIENT_ASSETS)) {
  throw new Error(`Expected client assets at ${CLIENT_ASSETS}. Run "npm run build" first.`);
}

if (!existsSync(SERVER_ENTRY)) {
  throw new Error(`Expected SSR server entry at ${SERVER_ENTRY}. Run "npm run build" first.`);
}

if (existsSync(ASSETS)) {
  rmSync(ASSETS, { recursive: true, force: true });
}

cpSync(CLIENT_ASSETS, ASSETS, { recursive: true });

const { server, port } = await startSsrServer();

try {
  const previewPath = BASE === "/" ? "/" : `${BASE}/`;
  const url = `http://127.0.0.1:${port}${previewPath}`;
  const response = await waitForPage(url);
  const html = await response.text();
  writeFileSync(join(DIST, "index.html"), html);
  copyFileSync(join(DIST, "index.html"), join(DIST, "404.html"));
} finally {
  await stopServer(server);
}

for (const dir of ["client", "server"]) {
  const path = join(DIST, dir);
  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true });
  }
}

writeFileSync(join(DIST, "CNAME"), `${CUSTOM_DOMAIN}\n`);
