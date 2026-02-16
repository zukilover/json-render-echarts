import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { RadarChartProps } from '../types';

/**
 * Radar Chart Implementation
 */
export const RadarChart: React.FC<{ element: React.ReactElement<RadarChartProps> }> = ({
  element,
}: { element: React.ReactElement<RadarChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
