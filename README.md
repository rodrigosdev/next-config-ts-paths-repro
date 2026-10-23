# next.config.ts: tsconfig `paths` break in modules the config imports

`next.config.ts` imports `./src/config/headers.ts`, which imports `@/value`
through the tsconfig alias `@/*` -> `./src/*`.

```sh
npm install
npm run build
```

`next build` (and `next dev`) fail to load the config with
`Cannot find module './src/value'`, required from `src/config/headers.ts`.

The same alias works when used in `next.config.ts` itself, and `tsc --noEmit`
is happy with the project.
