import prisma from "../config/db.js";

export const create = (data) => prisma.affectation.create({ data });
export const findAll = () => prisma.affectation.findMany();
export const findByEmployeProjet = (employeId, projetId) =>
  prisma.affectation.findUnique({
    where: {
      employeId_projetId: { employeId, projetId },
    },
  });

export const deleteById = (id) =>
  prisma.affectation.delete({ where: { id } });