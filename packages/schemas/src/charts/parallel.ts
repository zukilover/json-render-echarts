import z from 'zod';
import { BaseChartSchema } from '../base';
import { stringOrNumber, unknownRecord } from '../shared';

const ParallelAxisItemSchema = z
  .object({
    dim: z.number(),
    name: z.string().optional(),
    type: z.enum(['value', 'category', 'time', 'log']).optional(),
    data: z.array(z.union([z.string(), z.number()])).optional(),
    inverse: z.boolean().optional(),
    max: z.number().optional(),
    nameLocation: z.enum(['start', 'middle', 'end']).optional(),
  })
  .catchall(z.unknown());

/** Parallel series: type 'parallel', data (rows of axis values), lineStyle. */
const ParallelSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('parallel').optional(),
    lineStyle: z
      .object({
        width: z.number().optional(),
        opacity: z.number().optional(),
        color: z.string().optional(),
      })
      .optional(),
    data: z.array(z.array(z.union([z.string(), z.number()]))),
  })
  .catchall(z.unknown());

/** Parallel chart: ECharts option fragment (parallelAxis, parallel, series). */
export const ParallelChartSchema = BaseChartSchema.extend({
  parallelAxis: z.array(ParallelAxisItemSchema).optional(),
  parallel: z
    .object({
      left: stringOrNumber.optional(),
      right: stringOrNumber.optional(),
      bottom: stringOrNumber.optional(),
      top: stringOrNumber.optional(),
      parallelAxisDefault: unknownRecord.optional(),
    })
    .catchall(z.unknown())
    .optional(),
  series: z.array(ParallelSeriesSchema).optional(),
});
export type ParallelChartSchema = z.infer<typeof ParallelChartSchema>;
