import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema } from '../shared';

/** Bar series: type 'bar', data array, optional realtimeSort. */
const BarSeriesSchema = z
  .object({
    type: z.literal('bar').optional(),
    data: z.array(z.number()),
    realtimeSort: z.boolean().optional(),
  });

/** Bar chart: ECharts option fragment (xAxis, yAxis, series). */
export const BarChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
  series: z.array(BarSeriesSchema).optional(),
});
export type BarChartSchema = z.infer<typeof BarChartSchema>;
