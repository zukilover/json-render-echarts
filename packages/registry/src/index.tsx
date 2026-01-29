import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

/**
 * Unique keys for the components. 
 * These must match the keys used in the backend catalog.
 */
export const CHART_KEYS = {
  BAR: 'BarChart',
  LINE: 'LineChart',
  AREA: 'AreaChart',
  PIE: 'PieChart',
  SCATTER: 'ScatterChart',
} as const;

/**
 * Base properties common to all charts
 */
interface BaseChartProps {
  height: number;
  darkMode?: boolean;
  color?: string[];
  backgroundColor?: string;
  animation?: boolean;
  title?: string | {
    text?: string;
    subtext?: string;
    left?: string | number;
    top?: string | number;
  };
  legend?: boolean | {
    show?: boolean;
    orient?: 'horizontal' | 'vertical';
    left?: string | number;
    bottom?: string | number;
  };
  grid?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    containLabel?: boolean;
  };
  tooltip?: boolean | {
    show?: boolean;
    trigger?: 'item' | 'axis' | 'none';
  };
  toolbox?: boolean | {
    show?: boolean;
    feature?: Record<string, any>;
  };
  dataZoom?: any[];
  visualMap?: any[];
  aria?: Record<string, any>;
  textStyle?: {
    color?: string;
    fontSize?: number;
    fontFamily?: string;
  };
}

/**
 * Helper to generate common ECharts options from BaseChartProps
 */
const getCommonOptions = (props: BaseChartProps): EChartsOption => {
  const isDark = props.darkMode;

  return {
    darkMode: isDark,
    backgroundColor: props.backgroundColor,
    color: props.color,
    animation: props.animation,
    textStyle: props.textStyle,
    
    title: typeof props.title === 'string' 
      ? { text: props.title, left: 'center' }
      : props.title,
    
    legend: typeof props.legend === 'boolean'
      ? { show: props.legend, bottom: 0 }
      : { bottom: 0, ...props.legend },
    
    tooltip: typeof props.tooltip === 'boolean'
      ? { show: props.tooltip, trigger: 'axis' }
      : { trigger: 'axis', ...props.tooltip },
    
    grid: props.grid ? {
      containLabel: true,
      ...props.grid
    } : {
      containLabel: true,
      bottom: props.legend !== false ? 60 : 20,
      top: props.title ? 60 : 20,
    },

    toolbox: typeof props.toolbox === 'boolean'
      ? {
          show: props.toolbox,
          feature: {
            saveAsImage: {},
            dataView: { readOnly: false },
            restore: {},
          }
        }
      : props.toolbox,
    
    dataZoom: props.dataZoom,
    visualMap: props.visualMap,
    aria: props.aria,
  };
};

/**
 * Bar Chart Props
 */
export interface BarChartProps extends BaseChartProps {
  labels: string[];
  values: number[];
  horizontal?: boolean;
}

/**
 * Line Chart Props
 */
export interface LineChartProps extends BaseChartProps {
  labels: string[];
  series: {
    name: string;
    data: number[];
    smooth?: boolean;
  }[];
}

/**
 * Area Chart Props
 */
export interface AreaChartProps extends BaseChartProps {
  labels: string[];
  series: {
    name: string;
    data: number[];
    stacked?: boolean;
  }[];
}

/**
 * Pie Chart Props
 */
export interface PieChartProps extends BaseChartProps {
  data: {
    name: string;
    value: number;
  }[];
  donut?: boolean;
}

/**
 * Scatter Chart Props
 */
export interface ScatterChartProps extends BaseChartProps {
  data: {
    x: number;
    y: number;
    label?: string;
  }[];
  xAxisName?: string;
  yAxisName?: string;
}

/**
 * Bar Chart Implementation
 */
export const BarChart: React.FC<{ element: React.ReactElement<BarChartProps> }> = ({ 
  element }: { element: React.ReactElement<BarChartProps> }) => {
  const { labels, values, horizontal, height } = element.props;
  const commonOptions = getCommonOptions(element.props);
  
  const option: EChartsOption = {
    ...commonOptions,
    tooltip: { 
      ...commonOptions.tooltip,
      trigger: 'axis', 
      axisPointer: { type: 'shadow' } 
    },
    xAxis: horizontal ? { type: 'value' } : { type: 'category', data: labels },
    yAxis: horizontal ? { type: 'category', data: labels } : { type: 'value' },
    series: [{
      data: values,
      type: 'bar',
      realtimeSort: true,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};

/**
 * Line Chart Implementation
 */
export const LineChart: React.FC<{ element: React.ReactElement<LineChartProps> }> = ({ 
  element }: { element: React.ReactElement<LineChartProps> }) => {
  const { labels, series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    xAxis: { type: 'category', data: labels },
    yAxis: { type: 'value' },
    series: series.map(s => ({
      name: s.name,
      data: s.data,
      type: 'line',
      smooth: s.smooth,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};

/**
 * Area Chart Implementation
 */
export const AreaChart: React.FC<{ element: React.ReactElement<AreaChartProps> }> = ({ 
  element }: { element: React.ReactElement<AreaChartProps> }) => {
  const { labels, series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    xAxis: { type: 'category', boundaryGap: false, data: labels },
    yAxis: { type: 'value' },
    series: series.map(s => ({
      name: s.name,
      data: s.data,
      type: 'line',
      areaStyle: {},
      stack: s.stacked ? 'Total' : undefined,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};

/**
 * Pie Chart Implementation
 */
export const PieChart: React.FC<{ element: React.ReactElement<PieChartProps> }> = ({ 
  element }: { element: React.ReactElement<PieChartProps> }) => {
  const { data, donut, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    tooltip: { 
      ...commonOptions.tooltip,
      trigger: 'item' 
    },
    series: [{
      type: 'pie',
      radius: donut ? ['40%', '70%'] : '50%',
      data: data,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};

/**
 * Scatter Chart Implementation
 */
export const ScatterChart: React.FC<{ element: React.ReactElement<ScatterChartProps> }> = ({ 
  element }: { element: React.ReactElement<ScatterChartProps> }) => {
  const { data, xAxisName, yAxisName, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    tooltip: {
      ...commonOptions.tooltip,
      trigger: 'item',
      formatter: (params: any) => {
        return `${params.data.label ? `<b>${params.data.label}</b><br/>` : ''}X: ${params.data.value[0]}<br/>Y: ${params.data.value[1]}`;
      }
    },
    xAxis: { name: xAxisName, type: 'value' },
    yAxis: { name: yAxisName, type: 'value' },
    series: [{
      symbolSize: 20,
      data: data.map(d => ({ value: [d.x, d.y], label: d.label })),
      type: 'scatter',
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};

/**
 * The ECharts Registry for json-render
 */
export const echartsRegistry = {
  [CHART_KEYS.BAR]: BarChart,
  [CHART_KEYS.LINE]: LineChart,
  [CHART_KEYS.AREA]: AreaChart,
  [CHART_KEYS.PIE]: PieChart,
  [CHART_KEYS.SCATTER]: ScatterChart,
};

// Re-export json-render/react components for legacy interoperability
export * from '@json-render/react';

