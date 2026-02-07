import { EChartsOption } from 'echarts-for-react';
import { BaseChartProps } from './types';

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
