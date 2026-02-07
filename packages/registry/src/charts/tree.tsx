import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { TreeChartProps } from '../types';

/**
 * Tree Chart Implementation
 */
export const TreeChart: React.FC<{ element: React.ReactElement<TreeChartProps> }> = ({ 
  element }: { element: React.ReactElement<TreeChartProps> }) => {
  const { data, height, layout, orient } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'tree',
      data,
      layout,
      orient,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
