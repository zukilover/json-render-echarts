import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { AreaChartProps } from '../types';

/**
 * Area Chart Implementation
 */
export const AreaChart: React.FC<{ element: React.ReactElement<AreaChartProps> }> = ({
  element,
}: { element: React.ReactElement<AreaChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
