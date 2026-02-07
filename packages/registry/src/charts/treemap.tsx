import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { TreemapChartProps } from '../types';

/**
 * Treemap Chart Implementation
 */
export const TreemapChart: React.FC<{ element: React.ReactElement<TreemapChartProps> }> = ({ 
  element }: { element: React.ReactElement<TreemapChartProps> }) => {
  const { data, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'treemap',
      data,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
