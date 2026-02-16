import z from 'zod';
import { BaseChartSchema } from '../base';

/** Recursive treemap node: name, value, optional children. */
const TreemapNodeSchema: z.ZodType<{ name: string; value: number; children?: unknown[] }> = z.lazy(
  () =>
    z.object({
      name: z.string(),
      value: z.number(),
      children: z.array(TreemapNodeSchema).optional(),
    })
);

/** Treemap series: type 'treemap', data as hierarchical nodes. */
const TreemapSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('treemap').optional(),
    data: z.array(TreemapNodeSchema),
  })
  .catchall(z.unknown());

/** Treemap chart: ECharts option fragment (series). */
export const TreemapChartSchema = BaseChartSchema.extend({
  series: z.array(TreemapSeriesSchema).optional(),
});
export type TreemapChartSchema = z.infer<typeof TreemapChartSchema>;
