import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { LineChartProps } from '../types';

/**
 * Line Chart Implementation
 */
export const LineChart: React.FC<{ element: React.ReactElement<LineChartProps> }> = ({ 
  element }: { element: React.ReactElement<LineChartProps> }) => {
  const { labels, series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    xAxis: { type: 'category', data: labels },
    yAxis: { type: 'value' },
    series: series.map(s => ({
      name: s.name,
      data: s.data,
      type: 'line',
      smooth: s.smooth,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
