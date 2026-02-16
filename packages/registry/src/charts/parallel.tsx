import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { ParallelChartProps } from '../types';

/**
 * Parallel Chart Implementation
 */
export const ParallelChart: React.FC<{ element: React.ReactElement<ParallelChartProps> }> = ({
  element,
}: { element: React.ReactElement<ParallelChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
