import { z } from "zod";

export const createEmployeSchema = z.object({
  prenom: z.string().min(1, "Prénom obligatoire"),
  nom: z.string().min(1, "Nom obligatoire"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(9, "Téléphone trop court"),
  departementId: z.coerce.number(),
});

export const updateEmployeSchema = z.object({
  prenom: z.string().min(1).optional(),
  nom: z.string().min(1).optional(),
  email: z.string().email().optional(),
  telephone: z.string().min(9).optional(),
  departementId: z.coerce.number().optional(),
});