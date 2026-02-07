import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { ThemeRiverChartProps } from '../types';

/**
 * Theme River Chart Implementation
 */
export const ThemeRiverChart: React.FC<{ element: React.ReactElement<ThemeRiverChartProps> }> = ({ 
  element }: { element: React.ReactElement<ThemeRiverChartProps> }) => {
  const { series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(0,0,0,0.2)',
          width: 1,
          type: 'solid'
        }
      },
      ...commonOptions.tooltip,
    },
    singleAxis: {
      type: 'time',
      ...commonOptions.singleAxis,
    },
    series: series.map(s => ({
      ...s,
      type: 'themeRiver',
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
