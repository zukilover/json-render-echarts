import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { AxisSchema } from '../shared';

// --- Boxplot Chart ---
export const BoxplotChartSchema = BaseChartSchema.extend({
  source: z.array(z.array(z.number())),
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
});
export interface BoxplotChartProps extends BaseChartProps, z.infer<typeof BoxplotChartSchema> {}
