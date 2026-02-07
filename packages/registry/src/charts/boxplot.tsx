import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { BoxplotChartProps } from '../types';

/**
 * Boxplot Chart Implementation
 */
export const BoxplotChart: React.FC<{ element: React.ReactElement<BoxplotChartProps> }> = ({ 
  element }: { element: React.ReactElement<BoxplotChartProps> }) => {
  const { source, xAxis, yAxis, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    dataset: [
      { source },
      { transform: { type: 'boxplot' } },
      { fromDatasetIndex: 1, fromTransformResult: 1 }
    ],
    xAxis: {
      type: 'category',
      boundaryGap: true,
      ...xAxis,
    },
    yAxis: {
      type: 'value',
      ...yAxis,
    },
    series: [
      { name: 'boxplot', type: 'boxplot', datasetIndex: 1 },
      { name: 'outlier', type: 'scatter', datasetIndex: 2 }
    ],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
