import z from 'zod';

// ==========================================
// 1. PERFORMANCE HELPERS
// ==========================================

/**
 * Validates strictly as string or number without using z.union internally.
 * Prevents combinatorial explosion on simple CSS-like properties.
 */
export const stringOrNumber = z.custom<string | number>(
  (val) => typeof val === 'string' || typeof val === 'number',
  'Must be string or number'
);

/**
 * Validates arrays of numbers or strings (common in Axis data)
 */
export const arrayStringOrNumber = z.array(stringOrNumber);

/**
 * Validates generic objects without checking every internal property
 * Used for complex ECharts configurations (visualMap, aria) where strictness isn't worth the performance cost.
 */
export const unknownRecord = z.record(z.string(), z.unknown());

// ==========================================
// 2. NORMALIZERS (Pre-processing)
// ==========================================

/**
 * Converts `boolean` shorthand to an object structure.
 * Input: true -> Output: { show: true }
 * Input: { ... } -> Output: { ... }
 */
const booleanToObject = (val: unknown) => {
  if (typeof val === 'boolean') return { show: val };
  return val;
};

/**
 * Converts a single item to an array.
 * Input: { ... } -> Output: [{ ... }]
 * Input: [{ ... }] -> Output: [{ ... }]
 */
const singleToArray = (val: unknown) => {
  if (Array.isArray(val)) return val;
  if (val) return [val];
  return val;
};

/**
 * Converts string shorthand for Title to object.
 * Input: "My Chart" -> Output: { text: "My Chart" }
 */
const stringToTitleObject = (val: unknown) => {
  if (typeof val === 'string') return { text: val };
  return val;
};

// ==========================================
// 3. REUSABLE COMPONENT SCHEMAS
// ==========================================

export const TextStyleSchema = z.object({
  color: z.string().optional(),
  fontSize: z.number().optional(),
  fontFamily: z.string().optional(),
});

export const TitleSchema = z.object({
  text: z.string().optional(),
  subtext: z.string().optional(),
  left: stringOrNumber.optional(),
  top: stringOrNumber.optional(),
  borderColor: z.string().optional(),
  borderWidth: z.number().optional(),
  textStyle: TextStyleSchema.optional(),
});

// Normalized: Title is ALWAYS an array in the static type
export const NormalizedTitleSchema = z.preprocess(
  (val) => singleToArray(stringToTitleObject(val)), 
  z.array(TitleSchema).optional()
);

export const LegendSchema = z.object({
  show: z.boolean().optional(),
  orient: z.enum(['horizontal', 'vertical']).optional(),
  left: stringOrNumber.optional(),
  bottom: stringOrNumber.optional(),
});

// Normalized: Legend is ALWAYS an object
export const NormalizedLegendSchema = z.preprocess(
  booleanToObject,
  LegendSchema.optional().default({ show: true })
);

export const TooltipSchema = z.object({
  show: z.boolean().optional(),
  trigger: z.enum(['item', 'axis', 'none']).optional(),
  formatter: z.custom<string | ((params: unknown) => string)>().optional(), // Allow function or string
});

export const NormalizedTooltipSchema = z.preprocess(
  booleanToObject,
  TooltipSchema.optional().default({ show: true })
);

export const GridSchema = z.object({
  top: stringOrNumber.optional(),
  bottom: stringOrNumber.optional(),
  left: stringOrNumber.optional(),
  right: stringOrNumber.optional(),
  containLabel: z.boolean().optional(),
});

export const ToolboxSchema = z.object({
  show: z.boolean().optional(),
  feature: unknownRecord.optional(),
});

export const NormalizedToolboxSchema = z.preprocess(
  booleanToObject,
  ToolboxSchema.optional().default({ show: false })
);

export const AxisSchema = z.object({
  name: z.string().optional(),
  scale: z.boolean().optional(),
  min: stringOrNumber.optional(),
  max: stringOrNumber.optional(),
  type: z.enum(['value', 'category', 'time', 'log']).optional(),
  boundaryGap: z.boolean().optional(),
  nameGap: z.number().optional(),
  data: arrayStringOrNumber.optional(),
  splitArea: z.object({ show: z.boolean().optional() }).optional(),
  splitLine: z.object({ show: z.boolean().optional() }).optional(),
});
