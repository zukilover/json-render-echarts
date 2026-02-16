import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema } from '../shared';

/** Line series: type 'line', data array, optional name and smooth. */
const LineSeriesSchema = z
  .object({
    name: z.string().optional(),
    data: z.array(z.number()),
    type: z.literal('line').optional(),
    smooth: z.boolean().optional(),
  })
  .catchall(z.unknown());

/** Line chart: ECharts option fragment (xAxis, yAxis, series). */
export const LineChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.catchall(z.unknown()).optional(),
  yAxis: AxisSchema.catchall(z.unknown()).optional(),
  series: z.array(LineSeriesSchema).optional(),
});
export type LineChartSchema = z.infer<typeof LineChartSchema>;
