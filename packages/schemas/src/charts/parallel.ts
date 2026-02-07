import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';
import { stringOrNumber, unknownRecord } from '../shared';

// --- Parallel Chart ---
export const ParallelChartSchema = BaseChartSchema.extend({
  parallelAxis: z.array(z.object({
    dim: z.number(),
    name: z.string().optional(),
    type: z.enum(['value', 'category', 'time', 'log']).optional(),
    data: z.array(unknownRecord).optional(),
    inverse: z.boolean().optional(),
    max: z.number().optional(),
    nameLocation: z.enum(['start', 'middle', 'end']).optional(),
  })),
  parallel: z.object({
    left: stringOrNumber.optional(),
    right: stringOrNumber.optional(),
    bottom: stringOrNumber.optional(),
    top: stringOrNumber.optional(),
    parallelAxisDefault: unknownRecord.optional(),
  }).optional(),
  series: z.array(z.object({
    name: z.string().optional(),
    lineStyle: z.object({
      width: z.number().optional(),
      opacity: z.number().optional(),
      color: z.string().optional(),
    }).optional(),
    data: z.array(z.array(z.unknown())),
  })),
});
export interface ParallelChartProps extends BaseChartProps, z.infer<typeof ParallelChartSchema> {}
