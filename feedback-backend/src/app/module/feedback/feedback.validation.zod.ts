import { z } from "zod";

export const createFeedbackZodSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }),

    email: z.string().email({ message: "Invalid email format" }).optional(),

    message: z.string().trim().min(1, { message: "Message is required" }),

    rating: z
      .number()
      .min(1, { message: "Rating must be at least 1" })
      .max(5, { message: "Rating cannot be more than 5" })
      .optional(),
  })
  .strict();

export const updateFeedbackZodSchema = z
  .object({
    name: z.string().trim().min(1).optional(),

    email: z.string().email().optional(),

    message: z.string().trim().min(1).optional(),

    rating: z.number().min(1).max(5).optional(),

    category: z
      .enum(["Bug", "Feature Request", "Billing", "Support", "General"])
      .optional(),

    priority: z.enum(["Low", "Medium", "High", "Critical"]).optional(),

    sentiment: z.enum(["Positive", "Neutral", "Negative"]).optional(),

    team: z.enum(["Technical", "Billing", "Support", "General"]).optional(),
  })
  .strict();
