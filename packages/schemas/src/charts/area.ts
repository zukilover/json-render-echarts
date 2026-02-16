import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema, unknownRecord } from '../shared';

/** Area series: line with areaStyle (type 'line', areaStyle, stack). */
const AreaSeriesSchema = z
  .object({
    name: z.string().optional(),
    data: z.array(z.number()),
    type: z.literal('line').optional(),
    areaStyle: unknownRecord.optional(),
    stack: z.string().optional(),
  });

/** Area chart: ECharts option fragment (xAxis, yAxis, series). */
export const AreaChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
  series: z.array(AreaSeriesSchema).optional(),
});
export type AreaChartSchema = z.infer<typeof AreaChartSchema>;
