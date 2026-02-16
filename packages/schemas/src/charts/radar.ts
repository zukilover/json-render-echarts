import z from 'zod';
import { BaseChartSchema } from '../base';

const RadarIndicatorSchema = z.object({
  name: z.string(),
  max: z.number().optional(),
});

const RadarSeriesDataSchema = z.object({
  value: z.array(z.number()),
  name: z.string(),
});

/** Radar series: type 'radar', data as [{ value, name }]. */
const RadarSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('radar').optional(),
    data: z.array(RadarSeriesDataSchema),
  })
  .catchall(z.unknown());

/** Radar chart: ECharts option fragment (radar.indicator, series). */
export const RadarChartSchema = BaseChartSchema.extend({
  radar: z
    .object({
      indicator: z.array(RadarIndicatorSchema).optional(),
      shape: z.string().optional(),
    })
    .catchall(z.unknown())
    .optional(),
  series: z.array(RadarSeriesSchema).optional(),
});
export type RadarChartSchema = z.infer<typeof RadarChartSchema>;
