import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Pie Chart ---
export const PieChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
  })),
  donut: z.boolean().default(false),
});
export interface PieChartProps extends BaseChartProps, z.infer<typeof PieChartSchema> {}
