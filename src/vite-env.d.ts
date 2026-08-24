/// <reference types="vite/client" />

// vite/client declares lowercase image extensions only, and TypeScript matches
// wildcard module declarations case-sensitively. src/assets/portrait.JPG is
// uppercase, so without this every `import portrait from "@/assets/portrait.JPG"`
// fails to typecheck with TS2307.
declare module "*.JPG" {
  const src: string;
  export default src;
}
