import z from 'zod';
import {
  GridSchema,
  NormalizedLegendSchema,
  NormalizedTitleSchema,
  NormalizedToolboxSchema,
  NormalizedTooltipSchema,
  TextStyleSchema,
  unknownRecord,
  stringOrNumber,
} from './shared';

/** Base chart schema: height, title, legend, tooltip, grid, and shared ECharts options. */
export const BaseChartSchema = z.object({
  // General
  height: z.number().describe('Height in pixels'),
  darkMode: z.boolean().optional(),
  color: z.array(z.string()).optional(),
  backgroundColor: z.string().optional(),
  animation: z.boolean().default(true),

  // Components (Normalized)
  title: NormalizedTitleSchema,
  legend: NormalizedLegendSchema,
  tooltip: NormalizedTooltipSchema,
  toolbox: NormalizedToolboxSchema,
  grid: GridSchema.optional(),
  textStyle: TextStyleSchema.optional(),

  // Arrays are naturally union-free, so no normalizer needed
  dataZoom: z.array(z.object({
    type: z.enum(['inside', 'slider']),
    xAxisIndex: z.array(z.number()).optional(),
    yAxisIndex: z.array(z.number()).optional(),
  })).optional(),

  visualMap: z.array(unknownRecord).optional(),
  aria: unknownRecord.optional(),
  
  // Single Axis
  singleAxis: z.object({
    top: stringOrNumber.optional(),
    bottom: stringOrNumber.optional(),
    left: stringOrNumber.optional(),
    right: stringOrNumber.optional(),
    type: z.enum(['value', 'category', 'time', 'log']).optional(),
    axisPointer: unknownRecord.optional(),
    splitLine: unknownRecord.optional(),
    axisTick: unknownRecord.optional(),
    axisLabel: unknownRecord.optional(),
  }).optional(),
});

export type BaseChartSchema = z.infer<typeof BaseChartSchema>;
