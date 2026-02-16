import z from 'zod';
import { BaseChartSchema } from '../base';
import { unknownRecord } from '../shared';

const SankeyNodeSchema = z
  .object({ name: z.string() })
  .catchall(z.unknown());

const SankeyLinkSchema = z
  .object({
    source: z.string(),
    target: z.string(),
    value: z.number().optional(),
  })
  .catchall(z.unknown());

/** Sankey series: type 'sankey', data (nodes), links (source, target, value), layout, emphasis. */
const SankeySeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('sankey').optional(),
    layout: z.string().optional(),
    emphasis: unknownRecord.optional(),
    data: z.array(SankeyNodeSchema),
    links: z.array(SankeyLinkSchema),
  })
  .catchall(z.unknown());

/** Sankey chart: ECharts option fragment (series). */
export const SankeyChartSchema = BaseChartSchema.extend({
  series: z.array(SankeySeriesSchema).optional(),
});
export type SankeyChartSchema = z.infer<typeof SankeyChartSchema>;
