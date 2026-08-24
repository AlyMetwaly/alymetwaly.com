// Serve dist/ the way GitHub Pages does, so local testing catches what
// `vite preview` and `vite dev` hide.
//
// The important difference: there is NO SPA history fallback. An unmatched
// path gets 404.html with a real 404 status, exactly like Pages. A dev server
// that rewrites every unknown path to index.html will make a broken route look
// fine locally and 404 in production.
//
// Usage: npm run preview:static [-- --port 4173]
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = "dist";
const portArgIndex = process.argv.indexOf("--port");
const PORT = Number(
  portArgIndex !== -1 ? process.argv[portArgIndex + 1] : process.env.PORT || 4173,
);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function mimeFor(path) {
  const ext = extname(path);
  return MIME[ext] ?? MIME[ext.toLowerCase()] ?? "application/octet-stream";
}

async function fileAt(path) {
  try {
    return (await stat(path)).isFile() ? path : null;
  } catch {
    return null;
  }
}

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  const abs = join(ROOT, clean);
  // GitHub Pages serves /foo/index.html for both /foo and /foo/.
  return (await fileAt(abs)) ?? (await fileAt(join(abs, "index.html")));
}

const server = createServer(async (req, res) => {
  const file = await resolve(req.url || "/");

  if (file) {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": mimeFor(file), "content-length": body.length });
    res.end(body);
    return;
  }

  const notFound = await fileAt(join(ROOT, "404.html"));
  if (notFound) {
    const body = await readFile(notFound);
    res.writeHead(404, { "content-type": MIME[".html"], "content-length": body.length });
    res.end(body);
    return;
  }

  res.writeHead(404, { "content-type": MIME[".txt"] });
  res.end("404");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(
    `Serving ${ROOT} at http://127.0.0.1:${PORT} (GitHub Pages semantics, no SPA fallback)`,
  );
});
