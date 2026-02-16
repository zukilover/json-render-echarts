import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { LineChartProps } from '../types';

/**
 * Line Chart Implementation
 */
export const LineChart: React.FC<{ element: React.ReactElement<LineChartProps> }> = ({
  element,
}: { element: React.ReactElement<LineChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
