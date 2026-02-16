import z from 'zod';
import { BaseChartSchema } from '../base';

const PieDataSchema = z.object({ name: z.string(), value: z.number() });

/** Pie series: type 'pie', name/value data, optional radius (string or [inner, outer] for donut). */
const PieSeriesSchema = z
  .object({
    type: z.literal('pie').optional(),
    data: z.array(PieDataSchema),
    radius: z.union([z.string(), z.tuple([z.string(), z.string()])]).optional(),
  })
  .catchall(z.unknown());

/** Pie chart: ECharts option fragment (series). */
export const PieChartSchema = BaseChartSchema.extend({
  series: z.array(PieSeriesSchema).optional(),
});
export type PieChartSchema = z.infer<typeof PieChartSchema>;
