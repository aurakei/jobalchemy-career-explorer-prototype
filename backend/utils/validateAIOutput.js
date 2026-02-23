import { z } from "zod";

const IdentitySchema = z.object({
  identityStatement: z.string(),
  skills: z.array(z.string()),
  confidence: z.number().min(0).max(1),
  notes: z.string().optional()
});

const RecommendationsSchema = z.object({
  clusters: z.array(z.object({
    name: z.string(),
    roles: z.array(z.object({
      title: z.string(),
      fitReason: z.string()
    }))
  }))
});

export const validateIdentitySchema = (data) => IdentitySchema.parse(data);
export const validateRecommendationsSchema = (data) => RecommendationsSchema.parse(data);
