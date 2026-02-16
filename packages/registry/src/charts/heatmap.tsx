import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { HeatmapChartProps } from '../types';

/**
 * Heatmap Chart Implementation
 */
export const HeatmapChart: React.FC<{ element: React.ReactElement<HeatmapChartProps> }> = ({
  element,
}: { element: React.ReactElement<HeatmapChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
