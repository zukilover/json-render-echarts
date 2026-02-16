import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema } from '../shared';
import { unknownRecord } from '../shared';

/** Heatmap data: [xIndex, yIndex, value] where value is number or string (e.g. '-'). */
const HeatmapDataSchema = z.tuple([
  z.number(),
  z.number(),
  z.union([z.number(), z.string()]),
]);

/** Heatmap series: type 'heatmap', data array, optional label/emphasis. */
const HeatmapSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('heatmap').optional(),
    data: z.array(HeatmapDataSchema),
    label: unknownRecord.optional(),
    emphasis: unknownRecord.optional(),
  })
  .catchall(z.unknown());

/** Heatmap chart: ECharts option fragment (xAxis, yAxis, series). */
export const HeatmapChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.catchall(z.unknown()).optional(),
  yAxis: AxisSchema.catchall(z.unknown()).optional(),
  series: z.array(HeatmapSeriesSchema).optional(),
});
export type HeatmapChartSchema = z.infer<typeof HeatmapChartSchema>;
