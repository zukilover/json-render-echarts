import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Gauge Chart ---
export const GaugeChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
  })),
  min: z.number().optional(),
  max: z.number().optional(),
});
export interface GaugeChartProps extends BaseChartProps, z.infer<typeof GaugeChartSchema> {}
