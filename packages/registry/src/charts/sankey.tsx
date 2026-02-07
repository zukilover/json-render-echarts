import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { getCommonOptions } from '../common';
import { SankeyChartProps } from '../types';

/**
 * Sankey Chart Implementation
 */
export const SankeyChart: React.FC<{ element: React.ReactElement<SankeyChartProps> }> = ({ 
  element }: { element: React.ReactElement<SankeyChartProps> }) => {
  const { nodes, links, height } = element.props;
  const commonOptions = getCommonOptions(element.props);

  const option: EChartsOption = {
    ...commonOptions,
    series: [{
      type: 'sankey',
      data: nodes,
      links: links,
      emphasis: { focus: 'adjacency' }
    }],
  };
  return <ReactECharts option={option} style={{ height: `${height}px` }} />;
};
