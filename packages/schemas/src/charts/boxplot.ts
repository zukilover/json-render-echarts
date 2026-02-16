import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema, unknownRecord } from '../shared';

/** Dataset item: source (2D array), or transform, or fromDatasetIndex/fromTransformResult. */
const BoxplotDatasetItemSchema = z.union([
  z.object({ source: z.array(z.array(z.number())) }).catchall(z.unknown()),
  z
    .object({
      transform: z
        .object({ type: z.string().optional(), config: unknownRecord.optional() })
        .catchall(z.unknown()),
    })
    .catchall(z.unknown()),
  z
    .object({
      fromDatasetIndex: z.number().optional(),
      fromTransformResult: z.number().optional(),
    })
    .catchall(z.unknown()),
]);

/** Boxplot series: type 'boxplot' or 'scatter', datasetIndex, optional encode. */
const BoxplotSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.enum(['boxplot', 'scatter']).optional(),
    datasetIndex: z.number().optional(),
    encode: z.record(z.string(), z.number()).optional(),
  })
  .catchall(z.unknown());

/** Boxplot chart: ECharts option fragment (dataset, xAxis, yAxis, series). */
export const BoxplotChartSchema = BaseChartSchema.extend({
  dataset: z.array(BoxplotDatasetItemSchema).optional(),
  xAxis: AxisSchema.catchall(z.unknown()).optional(),
  yAxis: AxisSchema.catchall(z.unknown()).optional(),
  series: z.array(BoxplotSeriesSchema).optional(),
});
export type BoxplotChartSchema = z.infer<typeof BoxplotChartSchema>;
