import express from "express";
import { motoristaSchema } from "../schemas/motoristaSchema";
import * as motoristaRepository from "../repositories/motoristaRepository";

const router = express.Router();

router.get("/", async (req, res) => {
  const motoristas = await motoristaRepository.getAllMotoristas();
  res.json(motoristas);
});

router.post("/", async (req, res) => {
  try {
    console.log("Requisição recebida para criar um motorista:", req.body);
    const data = motoristaSchema.parse(req.body);
    console.log("Dados validados:", data);
    
    const motorista = await motoristaRepository.createMotorista(data);
    console.log("Motorista criado:", motorista);

    res.status(201).json(motorista);
  } catch (e) {
    console.error("Erro ao criar motorista:", e);
    res.status(400).json({ error: e.errors });
  }
});

router.put("/:id", async (req, res) => {
  const motoristaId = parseInt(req.params.id, 10);
  try {
    const data = motoristaSchema.parse(req.body);
    console.log("Dados validados:", data);

    const updatedMotorista = await motoristaRepository.updateMotorista(motoristaId, data);
    console.log("Motorista atualizado:", updatedMotorista);

    res.json(updatedMotorista);
  } catch (e) {
    console.error("Erro ao atualizar motorista:", e);
    res.status(400).json({ error: e.errors });
  }
});

router.delete("/:id", async (req, res) => {
  const motoristaId = parseInt(req.params.id, 10);
  try {
    await motoristaRepository.deleteMotorista(motoristaId);
    console.log("Dados do motorista:", motoristaId, "foram apagados.")
    res.status(204).end();
  } catch (e) {
    console.error("Erro ao deletar motorista:", e);
    res.status(400).json({ error: e.message });
  }
});

export default router;
