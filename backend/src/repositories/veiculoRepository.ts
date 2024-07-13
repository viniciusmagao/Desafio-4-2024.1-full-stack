import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllVeiculos = async () => {
  return await prisma.veiculo.findMany();
};

export const getVeiculoById = async (id: number) => {
  return await prisma.veiculo.findUnique({ where: { id } });
};

export const getVeiculosByMotoristaId = async (motoristaId: number) => {
  return await prisma.veiculo.findMany({
    where: { motoristaId },
  });
};

export const createVeiculo = async (data: any) => {
  return await prisma.veiculo.create({ data });
};

export const updateVeiculo = async (id: number, data: any) => {
  return await prisma.veiculo.update({ where: { id }, data });
};

export const deleteVeiculo = async (id: number) => {
  return await prisma.veiculo.delete({ where: { id } });
};
