import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { ScatterChartProps } from '../types';

/**
 * Scatter Chart Implementation
 */
export const ScatterChart: React.FC<{ element: React.ReactElement<ScatterChartProps> }> = ({ 
  element }: { element: React.ReactElement<ScatterChartProps> }) => {
  const { series, xAxis, yAxis, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    tooltip: {
      ...commonOptions.tooltip,
      trigger: 'item',
      formatter: (params: any) => {
        const data = params.data;
        const name = params.seriesName ? `<b>${params.seriesName}</b><br/>` : '';
        const value = Array.isArray(data) ? data : data?.value;
        if (!Array.isArray(value)) return name;
        return `${name}X: ${value[0]}<br/>Y: ${value[1]}`;
      }
    },
    xAxis: {
      type: 'value',
      ...xAxis,
    },
    yAxis: {
      type: 'value',
      ...yAxis,
    },
    series: series.map(s => ({
      name: s.name,
      type: 'scatter',
      symbolSize: s.symbolSize,
      data: s.data,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
