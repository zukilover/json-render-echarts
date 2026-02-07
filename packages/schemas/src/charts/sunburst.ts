import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { unknownRecord } from '../shared';

// --- Sunburst Chart ---
export const SunburstChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
    children: z.array(unknownRecord).optional(),
  })),
});
export interface SunburstChartProps extends BaseChartProps, z.infer<typeof SunburstChartSchema> {}
