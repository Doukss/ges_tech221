import * as employeRepo from "../repositories/employe.repo.js";
import prisma from "../config/db.js";

export const createEmploye = async (data) => {
  const exists = await employeRepo.findByEmail(data.email);
  if (exists) throw new Error("Cet email est déjà utilisé.");

  if (!/^\d{9,}$/.test(data.telephone))
    throw new Error("Le téléphone doit contenir au moins 9 chiffres.");

  const departementId = Number(data.departementId);

  const departement = await prisma.departement.findUnique({
    where: { id: departementId },
  });

  if (!departement) throw new Error("Département introuvable.");

  return employeRepo.create({
    ...data,
    departementId,
  });
};

export const getAllEmployes = () => employeRepo.findAll();

export const updateEmploye = async (id, data) => {
  const employe = await employeRepo.findById(id);
  if (!employe) throw new Error("Employé introuvable.");

  // Si email change, vérifier unicité
  if (data.email && data.email !== employe.email) {
    const exists = await employeRepo.findByEmail(data.email);
    if (exists) throw new Error("Cet email est déjà utilisé.");
  }

  // Si téléphone modifié, vérifier format
  if (data.telephone && !/^\d{6,}$/.test(data.telephone))
    throw new Error("Le téléphone doit contenir au moins 6 chiffres.");

  // Si departementId modifié, vérifier existence
  if (data.departementId) {
    const dep = await prisma.departement.findUnique({
      where: { id: data.departementId },
    });
    if (!dep) throw new Error("Département introuvable.");
  }

  return employeRepo.update(id, data);
};

export const deleteEmploye = async (id) => {
  // Vérifie si affectations liées
  const affectations = await prisma.affectation.findMany({
    where: { employeId: id },
  });
  if (affectations.length > 0)
    throw new Error(
      "Impossible de supprimer cet employé : affectations existantes."
    );

  return employeRepo.deleteById(id);
};