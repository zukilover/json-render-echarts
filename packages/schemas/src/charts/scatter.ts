import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema } from '../shared';

/** Scatter chart: optional xAxis/yAxis and scatter series (name, data, symbolSize). */
export const ScatterChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
  series: z.array(z.object({
    name: z.string().optional(),
    type: z.literal('scatter').default('scatter'),
    symbolSize: z.union([z.number(), z.array(z.number())]).default(10),
    data: z.array(z.array(z.number())),
  })),
});
export type ScatterChartSchema = z.infer<typeof ScatterChartSchema>;
