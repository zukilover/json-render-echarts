import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { GraphChartProps } from '../types';

/**
 * Graph Chart Implementation
 */
export const GraphChart: React.FC<{ element: React.ReactElement<GraphChartProps> }> = ({
  element,
}: { element: React.ReactElement<GraphChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
