// Remove the previous build output entirely before a new build starts.
//
// Vite writes into dist/client and dist/server, and never empties dist itself.
// Anything left at the top level of dist therefore survived every subsequent
// build and got republished by `gh-pages -d dist`. That is how stale
// prerendered route directories -- referencing asset hashes that no longer
// existed -- ended up live, serving blank pages.
import { rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
