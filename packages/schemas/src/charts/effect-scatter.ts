import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { AxisSchema } from '../shared';

// --- Effect Scatter Chart ---
export const EffectScatterChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.optional(),
  yAxis: AxisSchema.optional(),
  series: z.array(z.object({
    name: z.string().optional(),
    type: z.literal('effectScatter').default('effectScatter'),
    symbolSize: z.custom<number | number[]>((v) => typeof v === 'number' || Array.isArray(v)).default(10),
    data: z.array(z.array(z.number())),
    rippleEffect: z.object({
      brushType: z.enum(['stroke', 'fill']).optional(),
      scale: z.number().optional(),
      period: z.number().optional(),
    }).optional(),
  })),
});
export interface EffectScatterChartProps extends BaseChartProps, z.infer<typeof EffectScatterChartSchema> {}
