import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { AxisSchema } from '../shared';

// --- Scatter Chart ---
export const ScatterChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
  series: z.array(z.object({
    name: z.string().optional(),
    type: z.literal('scatter').default('scatter'),
    symbolSize: z.custom<number | number[]>((v) => typeof v === 'number' || Array.isArray(v)).default(10),
    data: z.array(z.array(z.number())),
  })),
});
export interface ScatterChartProps extends BaseChartProps, z.infer<typeof ScatterChartSchema> {}
