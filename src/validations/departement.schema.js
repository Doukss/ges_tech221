import { z } from "zod";

export const createDepartementSchema = z.object({
  code: z.string().min(2, "Le code doit contenir au moins 2 caractères"),
  libelle: z.string().min(1, "Le libellé est obligatoire"),
});

export const updateDepartementSchema = z.object({
  code: z.string().min(2).optional(),
  libelle: z.string().min(1).optional(),
  archived: z.boolean().optional(),
});


