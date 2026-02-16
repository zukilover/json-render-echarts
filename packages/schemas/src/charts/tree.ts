import z from 'zod';
import { BaseChartSchema } from '../base';

/** Recursive tree node: name, value, optional children (same structure as treemap). */
const TreeNodeSchema: z.ZodType<{ name: string; value: number; children?: unknown[] }> = z.lazy(
  () =>
    z.object({
      name: z.string(),
      value: z.number(),
      children: z.array(TreeNodeSchema).optional(),
    })
);

/** Tree series: type 'tree', data (hierarchical nodes), layout, orient, label, leaves, emphasis, etc. */
const TreeSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('tree').optional(),
    data: z.array(TreeNodeSchema),
    layout: z.enum(['orthogonal', 'radial']).optional(),
    orient: z.enum(['LR', 'RL', 'TB', 'BT']).optional(),
    symbolSize: z.number().optional(),
    label: z.record(z.string(), z.unknown()).optional(),
    leaves: z.record(z.string(), z.unknown()).optional(),
    emphasis: z.record(z.string(), z.unknown()).optional(),
    expandAndCollapse: z.boolean().optional(),
    animationDuration: z.number().optional(),
    animationDurationUpdate: z.number().optional(),
  })
  .catchall(z.unknown());

/** Tree chart: ECharts option fragment (series with type 'tree'). */
export const TreeChartSchema = BaseChartSchema.extend({
  series: z.array(TreeSeriesSchema).optional(),
});
export type TreeChartSchema = z.infer<typeof TreeChartSchema>;
