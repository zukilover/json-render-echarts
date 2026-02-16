import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema } from '../shared';

/** Effect scatter chart: optional axes and effectScatter series (rippleEffect). */
export const EffectScatterChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
  series: z.array(z.object({
    name: z.string().optional(),
    type: z.literal('effectScatter').default('effectScatter'),
    symbolSize: z.union([z.number(), z.array(z.number())]).default(10),
    data: z.array(z.array(z.number())),
    rippleEffect: z.object({
      brushType: z.enum(['stroke', 'fill']).optional(),
      scale: z.number().optional(),
      period: z.number().optional(),
    }).optional(),
  })),
});
export type EffectScatterChartSchema = z.infer<typeof EffectScatterChartSchema>;
