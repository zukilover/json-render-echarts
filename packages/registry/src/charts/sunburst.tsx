import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { SunburstChartProps } from '../types';

/**
 * Sunburst Chart Implementation
 */
export const SunburstChart: React.FC<{ element: React.ReactElement<SunburstChartProps> }> = ({ 
  element }: { element: React.ReactElement<SunburstChartProps> }) => {
  const { data, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'sunburst',
      data,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
