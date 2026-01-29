# @json-render-echarts/schemas

Zod schemas for Apache ECharts components in the `json-render` ecosystem.

## Why use this?

ECharts has thousands of properties and deeply nested structures. These schemas provide a **simplified, type-safe abstraction** that is:
1. **AI-Friendly:** Reduces hallucination by limiting available properties.
2. **Type-Safe:** Provides full TypeScript types and Zod validation.
3. **Standardized:** Aligned with official ECharts top-level options.

## Installation

```bash
npm install @json-render-echarts/schemas
```

## Included Schemas

- **BaseChartSchema:** Common options like title, legend, grid, tooltip, and toolbox.
- **BarChartSchema**
- **LineChartSchema**
- **AreaChartSchema**
- **PieChartSchema**
- **ScatterChartSchema**

## Usage

```typescript
import { BarChartSchema } from '@json-render-echarts/schemas';

// Use for catalog generation
const echartsCatalog = {
  BarChart: BarChartSchema,
};
```

## License

MIT
