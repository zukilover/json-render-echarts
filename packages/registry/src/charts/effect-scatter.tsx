import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { EffectScatterChartProps } from '../types';

/**
 * Effect Scatter Chart Implementation
 */
export const EffectScatterChart: React.FC<{ element: React.ReactElement<EffectScatterChartProps> }> = ({
  element,
}: { element: React.ReactElement<EffectScatterChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
