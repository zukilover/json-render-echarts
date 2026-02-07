import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Bar Chart ---
export const BarChartSchema = BaseChartSchema.extend({
  labels: z.array(z.string()),
  values: z.array(z.number()),
  horizontal: z.boolean().default(false),
});
export interface BarChartProps extends BaseChartProps, z.infer<typeof BarChartSchema> {}
