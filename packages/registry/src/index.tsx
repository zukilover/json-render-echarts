import { CHART_KEYS } from './keys';
import { AreaChart } from './charts/area';
import { BarChart } from './charts/bar';
import { BoxplotChart } from './charts/boxplot';
import { CandlestickChart } from './charts/candlestick';
import { EffectScatterChart } from './charts/effect-scatter';
import { FunnelChart } from './charts/funnel';
import { GaugeChart } from './charts/gauge';
import { GraphChart } from './charts/graph';
import { HeatmapChart } from './charts/heatmap';
import { LineChart } from './charts/line';
import { ParallelChart } from './charts/parallel';
import { PieChart } from './charts/pie';
import { RadarChart } from './charts/radar';
import { SankeyChart } from './charts/sankey';
import { ScatterChart } from './charts/scatter';
import { SunburstChart } from './charts/sunburst';
import { ThemeRiverChart } from './charts/theme-river';
import { TreeChart } from './charts/tree';
import { TreemapChart } from './charts/treemap';

/**
 * The ECharts Registry for json-render
 */
export const echartsRegistry = {
  [CHART_KEYS.BAR]: BarChart,
  [CHART_KEYS.LINE]: LineChart,
  [CHART_KEYS.AREA]: AreaChart,
  [CHART_KEYS.PIE]: PieChart,
  [CHART_KEYS.SCATTER]: ScatterChart,
  [CHART_KEYS.EFFECT_SCATTER]: EffectScatterChart,
  [CHART_KEYS.RADAR]: RadarChart,
  [CHART_KEYS.TREE]: TreeChart,
  [CHART_KEYS.TREEMAP]: TreemapChart,
  [CHART_KEYS.SUNBURST]: SunburstChart,
  [CHART_KEYS.BOXPLOT]: BoxplotChart,
  [CHART_KEYS.CANDLESTICK]: CandlestickChart,
  [CHART_KEYS.HEATMAP]: HeatmapChart,
  [CHART_KEYS.PARALLEL]: ParallelChart,
  [CHART_KEYS.GRAPH]: GraphChart,
  [CHART_KEYS.SANKEY]: SankeyChart,
  [CHART_KEYS.FUNNEL]: FunnelChart,
  [CHART_KEYS.GAUGE]: GaugeChart,
  [CHART_KEYS.THEME_RIVER]: ThemeRiverChart,
};

export { CHART_KEYS };
export * from './types';
export {
  AreaChart,
  BarChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  FunnelChart,
  GaugeChart,
  GraphChart,
  HeatmapChart,
  LineChart,
  ParallelChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
  SunburstChart,
  ThemeRiverChart,
  TreeChart,
  TreemapChart,
};

// Re-export json-render/react components for legacy interoperability
export * from '@json-render/react';
