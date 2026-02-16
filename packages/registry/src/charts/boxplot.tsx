import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { BoxplotChartProps } from '../types';

/**
 * Boxplot Chart Implementation
 */
export const BoxplotChart: React.FC<{ element: React.ReactElement<BoxplotChartProps> }> = ({
  element,
}: { element: React.ReactElement<BoxplotChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
