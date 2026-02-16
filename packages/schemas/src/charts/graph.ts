import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema, stringOrNumber, unknownRecord } from '../shared';

const GraphNodeSchema = z.object({
  name: z.string(),
  value: z.number().optional(),
  symbolSize: z.number().optional(),
  category: stringOrNumber.optional(),
});

const GraphLinkSchema = z.object({
  source: z.string(),
  target: z.string(),
});

/** Graph series: type 'graph', layout, coordinateSystem, data (nodes), links, symbolSize, label, edgeSymbol, lineStyle. */
const GraphSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('graph').optional(),
    layout: z.string().optional(),
    coordinateSystem: z.string().optional(),
    data: z.array(GraphNodeSchema).optional(),
    links: z.array(GraphLinkSchema).optional(),
    categories: z.array(z.object({ name: z.string() })).optional(),
    symbolSize: z.number().optional(),
    label: unknownRecord.optional(),
    edgeSymbol: z.union([z.string(), z.tuple([z.string(), z.string()])]).optional(),
    edgeSymbolSize: z.union([z.number(), z.array(z.number())]).optional(),
    lineStyle: unknownRecord.optional(),
  })
  .catchall(z.unknown());

/** Graph chart: ECharts option fragment (xAxis, yAxis, series). */
export const GraphChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.catchall(z.unknown()).optional(),
  yAxis: AxisSchema.catchall(z.unknown()).optional(),
  series: z.array(GraphSeriesSchema).optional(),
});
export type GraphChartSchema = z.infer<typeof GraphChartSchema>;
