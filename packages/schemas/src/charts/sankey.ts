import z from 'zod';
import { BaseChartProps } from '../base';
import { GraphChartSchema } from './graph';

// --- Sankey Chart ---
export const SankeyChartSchema = GraphChartSchema.extend({}); // Reuses Graph structure
export interface SankeyChartProps extends BaseChartProps, z.infer<typeof SankeyChartSchema> {}
