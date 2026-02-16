import z from 'zod';
import { BaseChartSchema } from '../base';

const GaugeDataSchema = z.object({ name: z.string(), value: z.number() });

/** Gauge series: type 'gauge', data (name/value), optional min/max. */
const GaugeSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('gauge').optional(),
    data: z.array(GaugeDataSchema),
    min: z.number().optional(),
    max: z.number().optional(),
  })
  .catchall(z.unknown());

/** Gauge chart: ECharts option fragment (series). */
export const GaugeChartSchema = BaseChartSchema.extend({
  series: z.array(GaugeSeriesSchema).optional(),
});
export type GaugeChartSchema = z.infer<typeof GaugeChartSchema>;
