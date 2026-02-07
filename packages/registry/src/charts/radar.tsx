import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { RadarChartProps } from '../types';

/**
 * Radar Chart Implementation
 */
export const RadarChart: React.FC<{ element: React.ReactElement<RadarChartProps> }> = ({ 
  element }: { element: React.ReactElement<RadarChartProps> }) => {
  const { indicators, series, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    radar: { indicator: indicators },
    series: series.map(s => ({
      name: s.name,
      data: s.data,
      type: 'radar',
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
