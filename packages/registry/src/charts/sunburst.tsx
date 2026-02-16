import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { SunburstChartProps } from '../types';

/**
 * Sunburst Chart Implementation
 */
export const SunburstChart: React.FC<{ element: React.ReactElement<SunburstChartProps> }> = ({
  element,
}: { element: React.ReactElement<SunburstChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
