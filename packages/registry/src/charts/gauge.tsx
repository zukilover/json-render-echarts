import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { GaugeChartProps } from '../types';

/**
 * Gauge Chart Implementation
 */
export const GaugeChart: React.FC<{ element: React.ReactElement<GaugeChartProps> }> = ({ 
  element }: { element: React.ReactElement<GaugeChartProps> }) => {
  const { data, height, min, max } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'gauge',
      data,
      min,
      max,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
