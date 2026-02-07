import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { HeatmapChartProps } from '../types';

/**
 * Heatmap Chart Implementation
 */
export const HeatmapChart: React.FC<{ element: React.ReactElement<HeatmapChartProps> }> = ({ 
  element }: { element: React.ReactElement<HeatmapChartProps> }) => {
  const { xAxisData, yAxisData, data, height, min, max } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    xAxis: { type: 'category', data: xAxisData },
    yAxis: { type: 'category', data: yAxisData },
    visualMap: commonOptions.visualMap || [{
      min: min || 0,
      max: max || 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
    }],
    series: [{
      type: 'heatmap',
      data,
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
