import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getChartOption } from '../common';
import { CandlestickChartProps } from '../types';

/**
 * Candlestick Chart Implementation
 */
export const CandlestickChart: React.FC<{ element: React.ReactElement<CandlestickChartProps> }> = ({
  element,
}: { element: React.ReactElement<CandlestickChartProps> }) => {
  const { height } = element.props;
  const option: EChartsOption = getChartOption(element.props);
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
