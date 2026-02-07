import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Candlestick Chart ---
export const CandlestickChartSchema = BaseChartSchema.extend({
  xAxisData: z.array(z.string()),
  data: z.array(z.tuple([z.number(), z.number(), z.number(), z.number()])),
});
export interface CandlestickChartProps extends BaseChartProps, z.infer<typeof CandlestickChartSchema> {}
