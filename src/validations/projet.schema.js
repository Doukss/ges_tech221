import { z } from "zod";

export const createProjetSchema = z.object({
  nom: z.string().min(1, "Nom obligatoire"),
  description: z.string().optional(),
  dateDebut: z.coerce.date(),
  dateFin: z.coerce.date().optional(),
  statut: z.enum(["BROUILLON", "EN_COURS", "TERMINE"]).optional(),
}).refine(
  (data) => {
    if (data.dateFin) {
      return data.dateFin > data.dateDebut;
    }
    return true;
  },
  {
    message: "dateFin doit être après dateDebut",
    path: ["dateFin"],
  }
);
