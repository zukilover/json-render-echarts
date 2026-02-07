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
 * Specific Chart Props
 */
export interface BarChartProps extends BaseChartProps {
  labels: string[];
  values: number[];
  horizontal?: boolean;
}

export interface LineChartProps extends BaseChartProps {
  labels: string[];
  series: {
    name: string;
    data: number[];
    smooth?: boolean;
    type?: 'line';
  }[];
}

export interface AreaChartProps extends BaseChartProps {
  labels: string[];
  series: {
    name: string;
    data: number[];
    stacked?: boolean;
    type?: 'area';
  }[];
}

export interface PieChartProps extends BaseChartProps {
  data: {
    name: string;
    value: number;
  }[];
  donut?: boolean;
}

export interface ScatterChartProps extends BaseChartProps {
  xAxis?: AxisProps;
  yAxis?: AxisProps;
  series: {
    name?: string;
    type?: 'scatter';
    symbolSize?: number | number[];
    data: number[][];
  }[];
}

export interface EffectScatterChartProps extends BaseChartProps {
  xAxis?: AxisProps;
  yAxis?: AxisProps;
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

export interface RadarChartProps extends BaseChartProps {
  indicators: { name: string; max?: number }[];
  series: { name: string; data: number[] }[];
}

export interface FunnelChartProps extends BaseChartProps {
  data: { name: string; value: number }[];
}

export interface GaugeChartProps extends BaseChartProps {
  data: { name: string; value: number }[];
  min?: number;
  max?: number;
}

export interface HeatmapChartProps extends BaseChartProps {
  xAxisData: string[];
  yAxisData: string[];
  data: [number, number, number][];
  min?: number;
  max?: number;
}

export interface TreemapChartProps extends BaseChartProps {
  data: { name: string; value: number; children?: Record<string, unknown>[] }[];
}

export type SunburstChartProps = TreemapChartProps;

export interface TreeChartProps extends TreemapChartProps {
  layout?: 'orthogonal' | 'radial';
  orient?: 'LR' | 'RL' | 'TB' | 'BT';
}

export interface CandlestickChartProps extends BaseChartProps {
  xAxisData: string[];
  data: [number, number, number, number][];
}

export interface BoxplotChartProps extends BaseChartProps {
  source: number[][];
  xAxis?: AxisProps;
  yAxis?: AxisProps;
}

export interface GraphChartProps extends BaseChartProps {
  nodes: { name: string; value?: number; symbolSize?: number; category?: string | number }[];
  links: { source: string; target: string }[];
  categories?: { name: string }[];
}

export type SankeyChartProps = GraphChartProps;

export interface ParallelChartProps extends BaseChartProps {
  parallelAxis: { 
    dim: number; 
    name?: string; 
    type?: 'value' | 'category' | 'time' | 'log'; 
    data?: Record<string, unknown>[];
    inverse?: boolean;
    max?: number;
    nameLocation?: 'start' | 'middle' | 'end';
  }[];
  parallel?: {
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    top?: string | number;
    parallelAxisDefault?: Record<string, unknown>;
  };
  series: {
    name?: string;
    lineStyle?: {
      width?: number;
      opacity?: number;
      color?: string;
    };
    data: unknown[][];
  }[];
}

export interface ThemeRiverChartProps extends BaseChartProps {
  series: {
    data: [string, number, string][];
    emphasis?: Record<string, unknown>;
  }[];
}
