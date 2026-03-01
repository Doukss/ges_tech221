import prisma from "../config/db.js";

export const create = (data) => prisma.projet.create({ data });
export const findById = (id) => prisma.projet.findUnique({ where: { id } });
export const findAll = () => prisma.projet.findMany();
export const update = (id, data) =>
  prisma.projet.update({ where: { id }, data });
export const deleteById = (id) =>
  prisma.projet.delete({ where: { id } });