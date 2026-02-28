import prisma from "../config/db.js";

export const findByCode = (code) => {
  return prisma.departement.findUnique({
    where: { code },
  });
};

export const create = (data) => {
  return prisma.departement.create({
    data,
  });
};

export const findAll = () => {
  return prisma.departement.findMany({
    where: { archived: false },
  });
};

export const findById = (id) => {
  return prisma.departement.findUnique({
    where: { id },
  });
};

export const update = (id, data) => {
  return prisma.departement.update({
    where: { id },
    data,
  });
};

export const deleteById = (id) => {
  return prisma.departement.delete({
    where: { id },
  });
};