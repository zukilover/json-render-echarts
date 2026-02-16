import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { ThemeRiverChartProps } from '../types';

/**
 * Theme River Chart Implementation
 */
export const ThemeRiverChart: React.FC<{ element: React.ReactElement<ThemeRiverChartProps> }> = ({
  element,
}: { element: React.ReactElement<ThemeRiverChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
