import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { TreeChartProps } from '../types';

/**
 * Tree Chart Implementation
 */
export const TreeChart: React.FC<{ element: React.ReactElement<TreeChartProps> }> = ({
  element,
}: { element: React.ReactElement<TreeChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
