import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { TreemapChartProps } from '../types';

/**
 * Treemap Chart Implementation
 */
export const TreemapChart: React.FC<{ element: React.ReactElement<TreemapChartProps> }> = ({
  element,
}: { element: React.ReactElement<TreemapChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
