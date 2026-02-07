import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { stringOrNumber } from '../shared';

// --- Graph Chart ---
export const GraphChartSchema = BaseChartSchema.extend({
  nodes: z.array(z.object({
    name: z.string(),
    value: z.number().optional(),
    symbolSize: z.number().optional(),
    category: stringOrNumber.optional(),
  })),
  links: z.array(z.object({
    source: z.string(),
    target: z.string(),
  })),
  categories: z.array(z.object({ name: z.string() })).optional(),
});
export interface GraphChartProps extends BaseChartProps, z.infer<typeof GraphChartSchema> {}
