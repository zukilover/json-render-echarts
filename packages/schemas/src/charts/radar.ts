import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Radar Chart ---
export const RadarChartSchema = BaseChartSchema.extend({
  indicators: z.array(z.object({
    name: z.string(),
    max: z.number().optional(),
  })),
  series: z.array(z.object({
    name: z.string(),
    data: z.array(z.number()),
  })),
});
export interface RadarChartProps extends BaseChartProps, z.infer<typeof RadarChartSchema> {}
