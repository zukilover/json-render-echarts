import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { GaugeChartProps } from '../types';

/**
 * Gauge Chart Implementation
 */
export const GaugeChart: React.FC<{ element: React.ReactElement<GaugeChartProps> }> = ({
  element,
}: { element: React.ReactElement<GaugeChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
