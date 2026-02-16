import z from 'zod';
import { BaseChartSchema } from '../base';
import { unknownRecord } from '../shared';

/** Sunburst chart: hierarchical data (name, value, optional children). */
export const SunburstChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
    children: z.array(unknownRecord).optional(),
  })),
});
export type SunburstChartSchema = z.infer<typeof SunburstChartSchema>;
