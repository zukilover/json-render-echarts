import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { SankeyChartProps } from '../types';

/**
 * Sankey Chart Implementation
 */
export const SankeyChart: React.FC<{ element: React.ReactElement<SankeyChartProps> }> = ({
  element,
}: { element: React.ReactElement<SankeyChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
