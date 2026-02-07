import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { ParallelChartProps } from '../types';

/**
 * Parallel Chart Implementation
 */
export const ParallelChart: React.FC<{ element: React.ReactElement<ParallelChartProps> }> = ({ 
  element }: { element: React.ReactElement<ParallelChartProps> }) => {
  const { parallelAxis, parallel, series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    parallelAxis,
    parallel,
    series: series.map(s => ({
      name: s.name,
      type: 'parallel',
      lineStyle: s.lineStyle,
      data: s.data,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
