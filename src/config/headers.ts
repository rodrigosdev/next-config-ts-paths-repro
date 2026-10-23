// The tsconfig `paths` alias `@/*` maps to `./src/*`, so this is ./src/value.ts.
import { VALUE } from "@/value";

export const headers = [
  { source: "/", headers: [{ key: "x-value", value: VALUE }] },
];
