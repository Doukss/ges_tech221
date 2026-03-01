import * as affectationRepo from "../repositories/affectation.repo.js";
import prisma from "../config/db.js";

export const createAffectation = async (data) => {
  // Convertir la date en objet Date JS
  const dateAffectation = new Date(data.dateAffectation);

  return prisma.affectation.create({
    data: {
      employeId: data.employeId,
      projetId: data.projetId,
      role: data.role,
      dateAffectation: dateAffectation, // Objet Date valide
    },
  });
};