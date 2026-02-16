import { EChartsOption } from 'echarts-for-react';
import { BaseChartProps } from './types';

/** Props consumed by getCommonOptions; chart-specific props are the rest. */
const BASE_CHART_PROP_KEYS = new Set([
  'height',
  'darkMode',
  'backgroundColor',
  'color',
  'animation',
  'textStyle',
  'title',
  'legend',
  'tooltip',
  'toolbox',
  'grid',
  'dataZoom',
  'visualMap',
  'singleAxis',
  'aria',
]);

/**
 * Build full ECharts option: common options + rest of props (chart-specific option fragment).
 */
export const getChartOption = (props: BaseChartProps): EChartsOption => {
  const commonOptions = getCommonOptions(props);
  const rest = Object.fromEntries(
    Object.entries(props).filter(([key]) => !BASE_CHART_PROP_KEYS.has(key))
  ) as EChartsOption;
  return { ...commonOptions, ...rest };
};

/**
 * Helper to generate common ECharts options from BaseChartProps
 */
export const getCommonOptions = (props: BaseChartProps): EChartsOption => {
  const isDark = props.darkMode;
  const title = Array.isArray(props.title) ? props.title : undefined;
  const legend = props.legend ?? { show: true };
  const tooltip = props.tooltip ?? { show: true };
  const toolbox = props.toolbox ?? { show: false };
  const hasTitle = Array.isArray(title) ? title.length > 0 : false;

  return {
    darkMode: isDark,
    backgroundColor: props.backgroundColor,
    color: props.color,
    animation: props.animation,
    textStyle: props.textStyle,
    
    title,
    
    legend,
    
    tooltip: { trigger: 'axis', ...tooltip },
    
    grid: props.grid ? {
      containLabel: true,
      ...props.grid
    } : {
      containLabel: true,
      bottom: legend.show !== false ? 60 : 20,
      top: hasTitle ? 60 : 20,
    },

    toolbox,
    
    dataZoom: props.dataZoom,
    visualMap: props.visualMap,
    singleAxis: props.singleAxis,
    aria: props.aria,
  };
};
