import * as projetRepo from "../repositories/projet.repo.js";
import prisma from "../config/db.js";

export const createProjet = async (data) => {
  return prisma.projet.create({
    data: {
      ...data,
      dateDebut: new Date(data.dateDebut),
      dateFin: data.dateFin ? new Date(data.dateFin) : undefined,
    },
  });
};

export const getAllProjets = () => {
  return projetRepo.findAll();
};

export const updateProjet = async (id, data) => {
  const projet = await projetRepo.findById(id);
  if (!projet) throw new Error("Projet introuvable.");

  if (data.dateFin && data.dateFin <= projet.dateDebut) {
    throw new Error("dateFin doit être après dateDebut.");
  }

  return projetRepo.update(id, data);
};

export const deleteProjet = async (id) => {
  const projet = await projetRepo.findById(id);
  if (!projet) throw new Error("Projet introuvable.");

  if (projet.statut === "EN_COURS") {
    throw new Error("Impossible de supprimer un projet en cours.");
  }

  return projetRepo.deleteById(id);
};