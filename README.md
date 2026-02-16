# json-render-echarts

`json-render` catalog for [Apache ECharts](https://echarts.apache.org/).

## Why use this?

ECharts has thousands of properties and deeply nested structures that LLMs often hallucinate.

**json-render-echarts** provides a set of **Smart Components** with strict Zod schemas. This ensures:
1. **Safety:** The AI can only change properties you allow.
2. **Reliability:** No more runtime crashes due to invalid chart configurations.
3. **Speed:** Smaller prompts and faster generation.

## Included Components

- **BarChart:** Categorical comparisons.
- **LineChart:** Trends over time.
- **AreaChart:** Magnitude of change over time.
- **PieChart:** Proportions and percentages.
- **ScatterChart:** Relationship between variables.

## Installation

This is a monorepo containing multiple packages. Most users will want the registry:

```bash
npm install @json-render-echarts/registry @json-render-echarts/schemas
```

## Usage

### 1. Setup the AI Prompt

Use the schemas to generate a system prompt for your LLM.

```typescript
import { generateCatalogPrompt } from '@json-render/core';
import { BarChartSchema, LineChartSchema /* ... */ } from '@json-render-echarts/schemas';

// You can create a catalog of the schemas you want to use
const echartsCatalog = {
  BarChart: BarChartSchema,
  LineChart: LineChartSchema,
  // ...
};

const systemPrompt = `
  You are a data visualization assistant. 
  ${generateCatalogPrompt(echartsCatalog)}
`;
```

### 2. Render the AI Output

Register the components in your React application using the registry.

```tsx
import { Renderer } from '@json-render/react';
import { echartsRegistry } from '@json-render-echarts/registry';

function AnalyticsPage({ uiTree }) {
  return (
    <div className="analytics-container">
      <Renderer 
        tree={uiTree} 
        registry={echartsRegistry} 
      />
    </div>
  );
}
```

## Development and Publishing

This project uses **npm workspaces** and is managed with **Changesets** for versioning and publishing.

### 1. Installation

```bash
npm install
```

### 2. Building

```bash
npm run build
```

### 3. Versioning

To create a new version of the packages:

1. Run `npm run changeset` to describe your changes.
2. Commit the generated changeset file.
3. When ready to publish, run `npm run changeset version` to bump versions and update changelogs.
4. Commit the changes.
5. Run `npm run changeset publish` to publish the packages to npm.

## License

MIT
