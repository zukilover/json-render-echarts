/**
 * Base properties common to all charts
 */
export interface BaseChartProps {
  height: number;
  darkMode?: boolean;
  color?: string[];
  backgroundColor?: string;
  animation?: boolean;
  title?: {
    text?: string;
    subtext?: string;
    left?: string | number;
    top?: string | number;
    borderColor?: string;
    borderWidth?: number;
    textStyle?: any;
  }[];
  legend?: {
    show?: boolean;
    orient?: 'horizontal' | 'vertical';
    left?: string | number;
    bottom?: string | number;
  };
  tooltip?: {
    show?: boolean;
    trigger?: 'item' | 'axis' | 'none';
    formatter?: string | ((params: unknown) => string);
  };
  toolbox?: {
    show?: boolean;
    feature?: Record<string, unknown>;
  };
  grid?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    containLabel?: boolean;
  };
  dataZoom?: {
    type: 'inside' | 'slider';
    xAxisIndex?: number | number[];
    yAxisIndex?: number | number[];
  }[];
  visualMap?: Record<string, unknown>[];
  singleAxis?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    type?: 'value' | 'category' | 'time' | 'log';
    axisPointer?: Record<string, unknown>;
    splitLine?: Record<string, unknown>;
    axisTick?: Record<string, unknown>;
    axisLabel?: Record<string, unknown>;
  };
  aria?: Record<string, unknown>;
  textStyle?: {
    color?: string;
    fontSize?: number;
    fontFamily?: string;
  };
}

/**
 * Cartesian Axis Props
 */
export interface AxisProps {
  name?: string;
  scale?: boolean;
  min?: number | string;
  max?: number | string;
  type?: 'value' | 'category' | 'time' | 'log';
  boundaryGap?: boolean;
  nameGap?: number;
  data?: (string | number)[];
  splitArea?: { show?: boolean };
  splitLine?: { show?: boolean };
}

/**
 * ECharts cartesian axis option. Use for xAxis/yAxis in option fragments.
 * Extends AxisProps with index signature for full ECharts axis config.
 */
export interface CartesianAxisOption extends AxisProps {
  [key: string]: unknown;
}

/**
 * Bar chart ECharts option fragment (xAxis, yAxis, series).
 * Props match the option shape so the option is read directly from props.
 * Tooltip is merged from common options in the component (trigger: 'axis', axisPointer).
 */
export interface BarChartOptionFragment {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    type?: 'bar';
    data: number[];
    realtimeSort?: boolean;
    [key: string]: unknown;
  }>;
}

export interface BarChartProps extends BaseChartProps, BarChartOptionFragment {}

/**
 * Line chart ECharts option fragment (xAxis, yAxis, series).
 * Props match the option shape so the option is read directly from props.
 */
export interface LineChartOptionFragment {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    name?: string;
    data: number[];
    type?: 'line';
    smooth?: boolean;
    [key: string]: unknown;
  }>;
}

export interface LineChartProps extends BaseChartProps, LineChartOptionFragment {}

/**
 * Area chart ECharts option fragment (xAxis, yAxis, series).
 * Props match the option shape so the option is read directly from props.
 */
export interface AreaChartOptionFragment {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    name?: string;
    data: number[];
    type?: 'line';
    areaStyle?: Record<string, unknown>;
    stack?: string;
    [key: string]: unknown;
  }>;
}

export interface AreaChartProps extends BaseChartProps, AreaChartOptionFragment {}

/**
 * Pie chart ECharts option fragment (series).
 * Each series has type 'pie', data (name/value), and optional radius (e.g. ['40%', '70%'] for donut).
 */
export interface PieChartOptionFragment {
  series?: Array<{
    type?: 'pie';
    data: { name: string; value: number }[];
    radius?: string | [string, string];
    [key: string]: unknown;
  }>;
}

export interface PieChartProps extends BaseChartProps, PieChartOptionFragment {}

export interface ScatterChartProps extends BaseChartProps {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series: {
    name?: string;
    type?: 'scatter';
    symbolSize?: number | number[];
    data: number[][];
  }[];
}

export interface EffectScatterChartProps extends BaseChartProps {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series: {
    name?: string;
    type?: 'effectScatter';
    symbolSize?: number | number[];
    data: number[][];
    rippleEffect?: {
      brushType?: 'stroke' | 'fill';
      scale?: number;
      period?: number;
    };
  }[];
}

/**
 * Radar chart ECharts option fragment (radar.indicator, series).
 * radar.indicator defines axes; each series has type 'radar' and data as [{ value, name }].
 */
export interface RadarChartOptionFragment {
  radar?: {
    indicator?: { name: string; max?: number }[];
    shape?: string;
    [key: string]: unknown;
  };
  series?: Array<{
    name?: string;
    type?: 'radar';
    data: { value: number[]; name: string }[];
    [key: string]: unknown;
  }>;
}

export interface RadarChartProps extends BaseChartProps, RadarChartOptionFragment {}

/**
 * Funnel chart ECharts option fragment (series).
 * Each series has type 'funnel', data (name/value), and optional layout/style (left, top, label, etc.).
 */
export interface FunnelChartOptionFragment {
  series?: Array<{
    name?: string;
    type?: 'funnel';
    data: { name: string; value: number }[];
    left?: string | number;
    top?: string | number;
    bottom?: string | number;
    width?: string | number;
    min?: number;
    max?: number;
    minSize?: string;
    maxSize?: string;
    sort?: string;
    gap?: number;
    label?: Record<string, unknown>;
    labelLine?: Record<string, unknown>;
    itemStyle?: Record<string, unknown>;
    emphasis?: Record<string, unknown>;
    [key: string]: unknown;
  }>;
}

export interface FunnelChartProps extends BaseChartProps, FunnelChartOptionFragment {}

/**
 * Gauge chart ECharts option fragment (series).
 * Each series has type 'gauge', data (name/value), and optional min/max/layout/style.
 */
export interface GaugeChartOptionFragment {
  series?: Array<{
    name?: string;
    type?: 'gauge';
    data: { name: string; value: number }[];
    min?: number;
    max?: number;
    [key: string]: unknown;
  }>;
}

export interface GaugeChartProps extends BaseChartProps, GaugeChartOptionFragment {}

/**
 * Heatmap chart ECharts option fragment (xAxis, yAxis, series).
 * xAxis/yAxis are category axes with data; series has type 'heatmap' and data as [xIndex, yIndex, value].
 */
export interface HeatmapChartOptionFragment {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    name?: string;
    type?: 'heatmap';
    data: [number, number, number | string][];
    label?: Record<string, unknown>;
    emphasis?: Record<string, unknown>;
    [key: string]: unknown;
  }>;
}

export interface HeatmapChartProps extends BaseChartProps, HeatmapChartOptionFragment {}

/**
 * Treemap node: name, value, optional nested children.
 */
export interface TreemapNode {
  name: string;
  value: number;
  children?: TreemapNode[];
}

/**
 * Treemap chart ECharts option fragment (series).
 * Each series has type 'treemap' and data as hierarchical nodes (name, value, children).
 */
export interface TreemapChartOptionFragment {
  series?: Array<{
    name?: string;
    type?: 'treemap';
    data: TreemapNode[];
    [key: string]: unknown;
  }>;
}

export interface TreemapChartProps extends BaseChartProps, TreemapChartOptionFragment {}

export type SunburstChartProps = TreemapChartProps;

/**
 * Tree chart ECharts option fragment (series).
 * Each series has type 'tree', data (hierarchical nodes), and layout/orient/symbolSize/label/leaves/emphasis etc. on the series item.
 */
export interface TreeChartOptionFragment {
  series?: Array<{
    name?: string;
    type?: 'tree';
    data: TreemapNode[];
    layout?: 'orthogonal' | 'radial';
    orient?: 'LR' | 'RL' | 'TB' | 'BT';
    symbolSize?: number;
    label?: Record<string, unknown>;
    leaves?: Record<string, unknown>;
    emphasis?: Record<string, unknown>;
    expandAndCollapse?: boolean;
    animationDuration?: number;
    animationDurationUpdate?: number;
    [key: string]: unknown;
  }>;
}

export interface TreeChartProps extends BaseChartProps, TreeChartOptionFragment {}

/**
 * Candlestick chart ECharts option fragment (xAxis, yAxis, series).
 * xAxis has category data; series has type 'candlestick' and data as [open, close, low, high][].
 */
export interface CandlestickChartOptionFragment {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    name?: string;
    type?: 'candlestick';
    data: [number, number, number, number][];
    [key: string]: unknown;
  }>;
}

export interface CandlestickChartProps extends BaseChartProps, CandlestickChartOptionFragment {}

/**
 * Boxplot chart ECharts option fragment (dataset, xAxis, yAxis, series).
 * dataset: [ { source }, { transform: { type: 'boxplot', config? } }, { fromDatasetIndex, fromTransformResult } ]; series reference datasetIndex.
 */
export interface BoxplotChartOptionFragment {
  dataset?: Array<
    | { source: number[][]; [key: string]: unknown }
    | { transform: { type?: string; config?: Record<string, unknown> }; [key: string]: unknown }
    | { fromDatasetIndex?: number; fromTransformResult?: number; [key: string]: unknown }
  >;
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    name?: string;
    type?: 'boxplot' | 'scatter';
    datasetIndex?: number;
    encode?: Record<string, number>;
    [key: string]: unknown;
  }>;
}

export interface BoxplotChartProps extends BaseChartProps, BoxplotChartOptionFragment {}

/**
 * Graph chart ECharts option fragment (xAxis, yAxis, series).
 * series has type 'graph' with layout, coordinateSystem, data (nodes), links, symbolSize, label, edgeSymbol, lineStyle, etc.
 */
export interface GraphChartOptionFragment {
  xAxis?: CartesianAxisOption;
  yAxis?: CartesianAxisOption;
  series?: Array<{
    name?: string;
    type?: 'graph';
    layout?: string;
    coordinateSystem?: string;
    data?: { name: string; value?: number; symbolSize?: number; category?: string | number }[];
    links?: { source: string; target: string }[];
    categories?: { name: string }[];
    symbolSize?: number;
    label?: Record<string, unknown>;
    edgeSymbol?: string | [string, string];
    edgeSymbolSize?: number | number[];
    lineStyle?: Record<string, unknown>;
    [key: string]: unknown;
  }>;
}

export interface GraphChartProps extends BaseChartProps, GraphChartOptionFragment {}

/**
 * Sankey chart ECharts option fragment (series).
 * Each series has type 'sankey', data (nodes with name), links (source, target, value), layout, emphasis.
 */
export interface SankeyChartOptionFragment {
  series?: Array<{
    name?: string;
    type?: 'sankey';
    layout?: string;
    emphasis?: { focus?: string };
    data: { name: string; [key: string]: unknown }[];
    links: { source: string; target: string; value?: number; [key: string]: unknown }[];
    [key: string]: unknown;
  }>;
}

export interface SankeyChartProps extends BaseChartProps, SankeyChartOptionFragment {}

/**
 * Parallel chart ECharts option fragment (parallelAxis, parallel, series).
 * parallelAxis defines dimensions; series has type 'parallel' and data as rows (one array per axis value).
 */
export interface ParallelChartOptionFragment {
  parallelAxis?: Array<{
    dim: number;
    name?: string;
    type?: 'value' | 'category' | 'time' | 'log';
    data?: (string | number)[];
    inverse?: boolean;
    max?: number;
    nameLocation?: 'start' | 'middle' | 'end';
    [key: string]: unknown;
  }>;
  parallel?: {
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    top?: string | number;
    parallelAxisDefault?: Record<string, unknown>;
    [key: string]: unknown;
  };
  series?: Array<{
    name?: string;
    type?: 'parallel';
    lineStyle?: { width?: number; opacity?: number; color?: string };
    data: (string | number)[][];
    [key: string]: unknown;
  }>;
}

export interface ParallelChartProps extends BaseChartProps, ParallelChartOptionFragment {}

/**
 * Theme river singleAxis option. Use with ThemeRiverChartProps for full option shape.
 */
export interface ThemeRiverSingleAxisOption {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  type?: 'value' | 'category' | 'time' | 'log';
  axisTick?: Record<string, unknown>;
  axisLabel?: Record<string, unknown>;
  axisPointer?: Record<string, unknown>;
  splitLine?: Record<string, unknown>;
  [key: string]: unknown;
}

/**
 * Theme river chart ECharts option fragment (singleAxis, series).
 * singleAxis is typically type 'time' with top, bottom, axisTick, axisLabel, axisPointer, splitLine.
 * series has type 'themeRiver' and data as [date, value, name][].
 */
export interface ThemeRiverChartOptionFragment {
  singleAxis?: ThemeRiverSingleAxisOption;
  series?: Array<{
    name?: string;
    type?: 'themeRiver';
    data: [string, number, string][];
    emphasis?: Record<string, unknown>;
    [key: string]: unknown;
  }>;
}

export interface ThemeRiverChartProps extends Omit<BaseChartProps, 'singleAxis'>, ThemeRiverChartOptionFragment {}

// =============================================================================
// Union and map types for chart-agnostic usage
// =============================================================================

/** Union of all chart prop types. Use when a value can be any chart's props. */
export type ChartProps =
  | BarChartProps
  | LineChartProps
  | AreaChartProps
  | PieChartProps
  | ScatterChartProps
  | EffectScatterChartProps
  | RadarChartProps
  | TreeChartProps
  | TreemapChartProps
  | SunburstChartProps
  | BoxplotChartProps
  | CandlestickChartProps
  | HeatmapChartProps
  | ParallelChartProps
  | GraphChartProps
  | SankeyChartProps
  | FunnelChartProps
  | GaugeChartProps
  | ThemeRiverChartProps;

/** Maps each chart key to its props type. Use for type-safe registry or render functions. */
export interface ChartPropsByKey {
  BarChart: BarChartProps;
  LineChart: LineChartProps;
  AreaChart: AreaChartProps;
  PieChart: PieChartProps;
  ScatterChart: ScatterChartProps;
  EffectScatterChart: EffectScatterChartProps;
  RadarChart: RadarChartProps;
  TreeChart: TreeChartProps;
  TreemapChart: TreemapChartProps;
  SunburstChart: SunburstChartProps;
  BoxplotChart: BoxplotChartProps;
  CandlestickChart: CandlestickChartProps;
  HeatmapChart: HeatmapChartProps;
  ParallelChart: ParallelChartProps;
  GraphChart: GraphChartProps;
  SankeyChart: SankeyChartProps;
  FunnelChart: FunnelChartProps;
  GaugeChart: GaugeChartProps;
  ThemeRiverChart: ThemeRiverChartProps;
}

/** Chart key (registry key). Use with ChartPropsByKey for type-safe lookup. */
export type ChartKey = keyof ChartPropsByKey;
