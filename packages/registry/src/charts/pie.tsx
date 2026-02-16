import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { PieChartProps } from '../types';

/**
 * Pie Chart Implementation
 */
export const PieChart: React.FC<{ element: React.ReactElement<PieChartProps> }> = ({
  element,
}: { element: React.ReactElement<PieChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
