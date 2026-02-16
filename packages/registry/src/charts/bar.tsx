import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { BarChartProps } from '../types';

/**
 * Bar Chart Implementation
 */
export const BarChart: React.FC<{ element: React.ReactElement<BarChartProps> }> = ({
  element,
}: { element: React.ReactElement<BarChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
