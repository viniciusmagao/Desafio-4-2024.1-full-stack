import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMultas = async () => {
  return await prisma.multa.findMany();
};

export const createMulta = async (data: any) => {
  if (!data.motoristaId) {
    throw new Error('O campo motoristaId é obrigatório.');
  }
  if (!data.veiculoId) {
    throw new Error('O campo veiculoId é obrigatório.');
  }

  const multaData = {
    valor: data.valor,
    data: new Date(data.data).toISOString(), // Convertendo para ISO-8601
    pontos: data.pontos,
    tipo: data.tipo,
    veiculoId: data.veiculoId,
    motoristaId: data.motoristaId,
  };

  return await prisma.multa.create({
    data: multaData,
  });
};

export const getMultaById = async (id: number) => {
  return await prisma.multa.findUnique({
    where: { id },
  });
};

export const updateMulta = async (id: number, data: any) => {
  const multaData = {
    valor: data.valor,
    data: new Date(data.data).toISOString(), // Convertendo para ISO-8601
    pontos: data.pontos,
    tipo: data.tipo,
    veiculoId: data.veiculoId,
    motoristaId: data.motoristaId,
  };

  return await prisma.multa.update({
    where: { id },
    data: multaData,
  });
};

export const deleteMulta = async (id: number) => {
  return await prisma.multa.delete({
    where: { id },
  });
};
