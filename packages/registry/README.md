# @json-render-echarts/registry

React components and registry for rendering Apache ECharts using `json-render`.

## Installation

```bash
npm install @json-render-echarts/registry @json-render-echarts/schemas
```

Note: This package requires `react`, `react-dom`, `echarts`, and `echarts-for-react` as peer dependencies.

## Usage

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

## Features

- **Standardized Options:** Automatically maps simplified JSON properties to complex ECharts configurations.
- **Responsive:** Inherits height and layout settings from the JSON configuration.
- **Extensible:** Built on top of `echarts-for-react`.

## License

MIT
