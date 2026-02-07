import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { GraphChartProps } from '../types';

/**
 * Graph Chart Implementation
 */
export const GraphChart: React.FC<{ element: React.ReactElement<GraphChartProps> }> = ({ 
  element }: { element: React.ReactElement<GraphChartProps> }) => {
  const { nodes, links, categories, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'graph',
      layout: 'force',
      data: nodes,
      links: links,
      categories: categories,
      roam: true,
      label: { show: true },
      force: { repulsion: 100 }
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
