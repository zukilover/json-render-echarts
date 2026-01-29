import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs'],
  dts: true,
  target: 'es2018',
  clean: true,
  noExternal: ['@json-render/core', '@json-render/react'],
  external: ['react', 'react-dom', 'echarts', 'echarts-for-react', 'zod', '@json-render-echarts/schemas'],
});
