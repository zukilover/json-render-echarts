import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { AreaChartProps } from '../types';

/**
 * Area Chart Implementation
 */
export const AreaChart: React.FC<{ element: React.ReactElement<AreaChartProps> }> = ({ 
  element }: { element: React.ReactElement<AreaChartProps> }) => {
  const { labels, series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    xAxis: { type: 'category', boundaryGap: false, data: labels },
    yAxis: { type: 'value' },
    series: series.map(s => ({
      name: s.name,
      data: s.data,
      type: 'line',
      areaStyle: {},
      stack: s.stacked ? 'Total' : undefined,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
