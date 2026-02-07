import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { CandlestickChartProps } from '../types';

/**
 * Candlestick Chart Implementation
 */
export const CandlestickChart: React.FC<{ element: React.ReactElement<CandlestickChartProps> }> = ({ 
  element }: { element: React.ReactElement<CandlestickChartProps> }) => {
  const { xAxisData, data, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    xAxis: { type: 'category', data: xAxisData },
    yAxis: { type: 'value' },
    series: [{
      type: 'candlestick',
      data,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
