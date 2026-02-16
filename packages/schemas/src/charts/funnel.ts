import z from 'zod';
import { BaseChartSchema } from '../base';
import { stringOrNumber, unknownRecord } from '../shared';

const FunnelDataSchema = z.object({ name: z.string(), value: z.number() });

/** Funnel series: type 'funnel', data (name/value), optional layout and style. */
const FunnelSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('funnel').optional(),
    data: z.array(FunnelDataSchema),
    left: stringOrNumber.optional(),
    top: stringOrNumber.optional(),
    bottom: stringOrNumber.optional(),
    width: stringOrNumber.optional(),
    min: z.number().optional(),
    max: z.number().optional(),
    minSize: z.string().optional(),
    maxSize: z.string().optional(),
    sort: z.string().optional(),
    gap: z.number().optional(),
    label: unknownRecord.optional(),
    labelLine: unknownRecord.optional(),
    itemStyle: unknownRecord.optional(),
    emphasis: unknownRecord.optional(),
  })
  .catchall(z.unknown());

/** Funnel chart: ECharts option fragment (series). */
export const FunnelChartSchema = BaseChartSchema.extend({
  series: z.array(FunnelSeriesSchema).optional(),
});
export type FunnelChartSchema = z.infer<typeof FunnelChartSchema>;
