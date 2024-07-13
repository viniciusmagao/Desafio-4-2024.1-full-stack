import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMotoristas = async () => {
  return await prisma.motorista.findMany();
};

export const createMotorista = async (data: any) => {
  const motoristaData = {
    cpf: data.cpf,
    nome: data.nome,
    vencimentoCnh: new Date(data.vencimentoCnh).toISOString(), // Convertendo para ISO-8601
    categoriaCnh: data.categoriaCnh,
  };

  return await prisma.motorista.create({
    data: motoristaData,
  });
};

export const getMotoristaById = async (id: number) => {
  return await prisma.motorista.findUnique({
    where: { id },
  });
};

export const updateMotorista = async (id: number, data: any) => {
  return await prisma.motorista.update({
    where: { id },
    data: {
      cpf: data.cpf,
      nome: data.nome,
      vencimentoCnh: new Date(data.vencimentoCnh).toISOString(), // Convertendo para ISO-8601
      categoriaCnh: data.categoriaCnh,
    },
  });
};

export const deleteMotorista = async (id: number) => {
  return await prisma.motorista.delete({
    where: { id },
  });
};
