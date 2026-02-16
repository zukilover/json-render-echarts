import z from 'zod';
import { BaseChartSchema } from '../base';
import { AxisSchema } from '../shared';

/** OHLC tuple: [open, close, low, high]. */
const CandlestickDataSchema = z.tuple([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);

/** Candlestick series: type 'candlestick', data as OHLC tuples. */
const CandlestickSeriesSchema = z
  .object({
    name: z.string().optional(),
    type: z.literal('candlestick').optional(),
    data: z.array(CandlestickDataSchema),
  })
  .catchall(z.unknown());

/** Candlestick chart: ECharts option fragment (xAxis, yAxis, series). */
export const CandlestickChartSchema = BaseChartSchema.extend({
  xAxis: AxisSchema.catchall(z.unknown()).optional(),
  yAxis: AxisSchema.catchall(z.unknown()).optional(),
  series: z.array(CandlestickSeriesSchema).optional(),
});
export type CandlestickChartSchema = z.infer<typeof CandlestickChartSchema>;
