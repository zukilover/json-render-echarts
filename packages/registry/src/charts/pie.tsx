import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { PieChartProps } from '../types';

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
