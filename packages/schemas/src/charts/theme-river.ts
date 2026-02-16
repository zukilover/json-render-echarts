import z from 'zod';
import { BaseChartSchema } from '../base';
import { unknownRecord } from '../shared';

const ThemeRiverDataSchema = z.tuple([z.string(), z.number(), z.string()]);

/** Theme river series: type 'themeRiver', data as [date, value, name][], emphasis. */
const ThemeRiverSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('themeRiver').optional(),
    data: z.array(ThemeRiverDataSchema),
    emphasis: unknownRecord.optional(),
  })
  .catchall(z.unknown());

/** Theme river chart: ECharts option fragment (series). Base props provide tooltip, legend, singleAxis. */
export const ThemeRiverChartSchema = BaseChartSchema.extend({
  series: z.array(ThemeRiverSeriesSchema).optional(),
});
export type ThemeRiverChartSchema = z.infer<typeof ThemeRiverChartSchema>;
