import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  target: 'es2018',
  clean: true,
  external: ['zod'],
});
