import prisma from "../config/db.js";

export const create = (data) => prisma.employe.create({ data });
export const findById = (id) => prisma.employe.findUnique({ where: { id } });
export const findByEmail = (email) => prisma.employe.findUnique({ where: { email } });
export const findAll = () => prisma.employe.findMany();
export const update = (id, data) =>
  prisma.employe.update({ where: { id }, data });
export const deleteById = (id) =>
  prisma.employe.delete({ where: { id } });