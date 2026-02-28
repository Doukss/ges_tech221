import * as departementRepo from "../repositories/departement.repo.js";
import prisma from "../config/db.js";

export const createDepartement = async (data) => {
  const existing = await departementRepo.findByCode(data.code);

  if (existing) {
    throw new Error("Ce code département existe déjà.");
  }

  return departementRepo.create(data);
};

export const getAllDepartements = () => {
  return departementRepo.findAll();
};

export const deleteDepartement = async (id) => {
  const employes = await prisma.employe.findMany({
    where: { departementId: id },
  });

  if (employes.length > 0) {
    throw new Error(
      "Impossible de supprimer un département contenant des employés.",
    );
  }

  return departementRepo.deleteById(id);
};




// ......................updateDepartement.................


export const updateDepartement = async (id, data) => {
  const departement = await departementRepo.findById(id);
  if (!departement) throw new Error("Département introuvable.");

  // Vérifie si le code change et existe déjà
  if (data.code && data.code !== departement.code) {
    const exists = await departementRepo.findByCode(data.code);
    if (exists) throw new Error("Ce code département existe déjà.");
  }

  return departementRepo.update(id, data);
};



// -------------------------- ARCHIVE --------------------------


export const archiveDepartement = async (id) => {
  const departement = await departementRepo.findById(id);
  if (!departement) throw new Error("Département introuvable.");

  const employes = await prisma.employe.findMany({ where: { departementId: id } });
  if (employes.length > 0) {
    throw new Error("Impossible d’archiver un département contenant des employés.");
  }

  return departementRepo.update(id, { archived: true });
};