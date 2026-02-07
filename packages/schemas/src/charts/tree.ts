import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { unknownRecord } from '../shared';

// --- Tree Chart ---
export const TreeChartSchema = BaseChartSchema.extend({
  data: z.array(z.object({
    name: z.string(),
    value: z.number(),
    children: z.array(unknownRecord).optional(),
  })),
  layout: z.enum(['orthogonal', 'radial']).optional(),
  orient: z.enum(['LR', 'RL', 'TB', 'BT']).optional(),
});
export interface TreeChartProps extends BaseChartProps, z.infer<typeof TreeChartSchema> {}
