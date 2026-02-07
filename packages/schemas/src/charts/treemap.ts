import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { unknownRecord } from '../shared';

// --- Treemap Chart ---
export const TreemapChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
    children: z.array(unknownRecord).optional(),
  })),
});
export interface TreemapChartProps extends BaseChartProps, z.infer<typeof TreemapChartSchema> {}
