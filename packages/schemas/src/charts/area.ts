import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Area Chart ---
export const AreaChartSchema = BaseChartSchema.extend({
  labels: z.array(z.string()),
  series: z.array(z.object({
    name: z.string(),
    data: z.array(z.number()),
    stacked: z.boolean().default(true),
    type: z.literal('area').default('area'),
  })),
});
export interface AreaChartProps extends BaseChartProps, z.infer<typeof AreaChartSchema> {}
