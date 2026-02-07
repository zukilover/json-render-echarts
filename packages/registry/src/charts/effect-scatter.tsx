import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { EffectScatterChartProps } from '../types';

/**
 * Effect Scatter Chart Implementation
 */
export const EffectScatterChart: React.FC<{ element: React.ReactElement<EffectScatterChartProps> }> = ({ 
  element }: { element: React.ReactElement<EffectScatterChartProps> }) => {
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
      type: 'effectScatter',
      symbolSize: s.symbolSize,
      rippleEffect: s.rippleEffect,
      data: s.data,
    })),
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
