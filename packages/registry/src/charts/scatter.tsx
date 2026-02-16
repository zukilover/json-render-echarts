import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { ScatterChartProps } from '../types';

/**
 * Scatter Chart Implementation
 */
export const ScatterChart: React.FC<{ element: React.ReactElement<ScatterChartProps> }> = ({
  element,
}: { element: React.ReactElement<ScatterChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
