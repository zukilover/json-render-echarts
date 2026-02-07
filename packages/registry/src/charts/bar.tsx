import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { BarChartProps } from '../types';

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
