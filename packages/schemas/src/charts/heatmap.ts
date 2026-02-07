import z from 'zod';
import { BaseChartSchema, BaseChartProps } from '../base';

// --- Heatmap Chart ---
export const HeatmapChartSchema = BaseChartSchema.extend({
  xAxisData: z.array(z.string()),
  yAxisData: z.array(z.string()),
  data: z.array(z.tuple([z.number(), z.number(), z.number()])),
  min: z.number().optional(),
  max: z.number().optional(),
});
export interface HeatmapChartProps extends BaseChartProps, z.infer<typeof HeatmapChartSchema> {}
