import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { FunnelChartProps } from '../types';

/**
 * Funnel Chart Implementation
 */
export const FunnelChart: React.FC<{ element: React.ReactElement<FunnelChartProps> }> = ({
  element,
}: { element: React.ReactElement<FunnelChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
