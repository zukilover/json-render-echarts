import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Funnel Chart ---
export const FunnelChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
  })),
});
export interface FunnelChartProps extends BaseChartProps, z.infer<typeof FunnelChartSchema> {}
