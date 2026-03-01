import { z } from "zod";

export const createAffectationSchema = z.object({
  employeId: z.coerce.number(),
  projetId: z.coerce.number(),
  role: z.string().min(1, "Role obligatoire"),
  dateAffectation: z.coerce.date(),
});