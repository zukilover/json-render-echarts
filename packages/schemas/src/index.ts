import z from 'zod';

/**
 * Unique keys for the components
 */
export const CHART_KEYS = {
  BAR: 'BarChart',
  LINE: 'LineChart',
  AREA: 'AreaChart',
  PIE: 'PieChart',
  SCATTER: 'ScatterChart',
} as const;

/**
 * Base properties common to all charts, aligned with ECharts top-level options
 */
export const BaseChartSchema = z.object({
  // General
  height: z.number().describe('Height in pixels'),
  darkMode: z.boolean().optional().describe('Enable dark mode'),
  color: z.array(z.string()).optional().describe('Global color palette'),
  backgroundColor: z.string().optional().describe('Background color'),
  animation: z.boolean().default(true).describe('Enable animation'),

  // Components
  title: z.string().or(
    z.object({
      text: z.string().optional(),
      subtext: z.string().optional(),
      left: z.string().or(z.number()).optional(),
      top: z.string().or(z.number()).optional(),
    })
  ).optional().describe('Title configuration'),

  legend: z.boolean().or(
    z.object({
      show: z.boolean().optional(),
      orient: z.enum(['horizontal', 'vertical']).optional(),
      left: z.string().or(z.number()).optional(),
      bottom: z.string().or(z.number()).optional(),
    })
  ).default(true).describe('Legend configuration'),

  grid: z.object({
    top: z.string().or(z.number()).optional(),
    bottom: z.string().or(z.number()).optional(),
    left: z.string().or(z.number()).optional(),
    right: z.string().or(z.number()).optional(),
    containLabel: z.boolean().optional(),
  }).optional().describe('Grid margins'),

  tooltip: z.boolean().or(
    z.object({
      show: z.boolean().optional(),
      trigger: z.enum(['item', 'axis', 'none']).optional(),
    })
  ).default(true).describe('Tooltip configuration'),

  toolbox: z.boolean().or(
    z.object({
      show: z.boolean().optional(),
      feature: z.record(z.string(), z.any()).optional(),
    })
  ).default(false).describe('Toolbox features'),

  dataZoom: z.array(z.object({
    type: z.enum(['inside', 'slider']),
    xAxisIndex: z.number().or(z.array(z.number())).optional(),
    yAxisIndex: z.number().or(z.array(z.number())).optional(),
  })).optional().describe('Data zoom configurations'),

  visualMap: z.array(z.record(z.string(), z.any())).optional().describe('Visual map configurations'),
  
  // Advanced
  aria: z.record(z.string(), z.any()).optional().describe('Accessibility configuration'),
  textStyle: z.object({
    color: z.string().optional(),
    fontSize: z.number().optional(),
    fontFamily: z.string().optional(),
  }).optional(),
});

/**
 * Simplified Bar Chart Schema
 */
export const BarChartSchema = BaseChartSchema.extend({
  labels: z.array(z.string()).describe('Categories for the bars'),
  values: z.array(z.number()).describe('Values for each category'),
  horizontal: z.boolean().default(false).describe('Whether to display bars horizontally'),
});

/**
 * Simplified Line Chart Schema
 */
export const LineChartSchema = BaseChartSchema.extend({
  labels: z.array(z.string()).describe('Labels for the x-axis'),
  series: z.array(z.object({
    name: z.string(),
    data: z.array(z.number()),
    smooth: z.boolean().default(false),
  })).describe('Data series to plot'),
});

/**
 * Simplified Area Chart Schema
 */
export const AreaChartSchema = BaseChartSchema.extend({
  labels: z.array(z.string()).describe('Labels for the x-axis'),
  series: z.array(z.object({
    name: z.string(),
    data: z.array(z.number()),
    stacked: z.boolean().default(true),
  })).describe('Data series to plot as filled areas'),
});

/**
 * Simplified Pie Chart Schema
 */
export const PieChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string().describe('Category name'),
    value: z.number().describe('Value for this category'),
  })).describe('Data points for pie slices'),
  donut: z.boolean().default(false).describe('Whether to render as a donut chart'),
});

/**
 * Simplified Scatter Chart Schema
 */
export const ScatterChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    x: z.number(),
    y: z.number(),
    label: z.string().optional(),
  })).describe('Points to plot'),
  xAxisName: z.string().optional(),
  yAxisName: z.string().optional(),
});

// Types derived from schemas
export type BarChartProps = z.infer<typeof BarChartSchema>;
export type LineChartProps = z.infer<typeof LineChartSchema>;
export type AreaChartProps = z.infer<typeof AreaChartSchema>;
export type PieChartProps = z.infer<typeof PieChartSchema>;
export type ScatterChartProps = z.infer<typeof ScatterChartSchema>;
