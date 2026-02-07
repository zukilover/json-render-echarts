import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Line Chart ---
export const LineChartSchema = BaseChartSchema.extend({
  labels: z.array(z.string()),
  series: z.array(z.object({
    name: z.string(),
    data: z.array(z.number()),
    smooth: z.boolean().default(false),
    type: z.literal('line').default('line'),
  })),
});
export interface LineChartProps extends BaseChartProps, z.infer<typeof LineChartSchema> {}
