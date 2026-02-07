import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { FunnelChartProps } from '../types';

/**
 * Funnel Chart Implementation
 */
export const FunnelChart: React.FC<{ element: React.ReactElement<FunnelChartProps> }> = ({ 
  element }: { element: React.ReactElement<FunnelChartProps> }) => {
  const { data, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'funnel',
      data,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
