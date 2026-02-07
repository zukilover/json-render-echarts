import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { unknownRecord } from '../shared';

// --- Theme River Chart ---
export const ThemeRiverChartSchema = BaseChartSchema.extend({
  series: z.array(z.object({
    data: z.array(z.tuple([z.string(), z.number(), z.string()])),
    emphasis: unknownRecord.optional(),
  })),
});
export interface ThemeRiverChartProps extends BaseChartProps, z.infer<typeof ThemeRiverChartSchema> {}
