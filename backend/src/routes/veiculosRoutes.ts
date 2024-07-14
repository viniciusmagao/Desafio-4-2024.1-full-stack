import express from "express";
import { veiculoSchema } from "../schemas/veiculoSchema";
import * as veiculoRepository from "../repositories/veiculoRepository";

const router = express.Router();

router.get("/motorista/:motoristaId", async (req, res) => {
  const motoristaId = parseInt(req.params.motoristaId);
  try {
    const veiculos = await veiculoRepository.getVeiculosByMotoristaId(motoristaId);
    if (veiculos.length > 0) {
      res.json(veiculos);
    } else {
      res.status(404).json({ error: "Veículos não encontrados para este motorista" });
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/", async (req, res) => {
  const veiculos = await veiculoRepository.getAllVeiculos();
  res.json(veiculos);
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const veiculo = await veiculoRepository.getVeiculoById(id);
    if (veiculo) {
      res.json(veiculo);
    } else {
      res.status(404).json({ error: "Veículo não encontrado" });
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.post("/motorista/:motoristaId", async (req, res) => {
  const motoristaId = parseInt(req.params.motoristaId);
  try {
    const data = { ...veiculoSchema.parse(req.body), motoristaId };
    const veiculo = await veiculoRepository.createVeiculo(data);
    res.status(201).json(veiculo);
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});

export default router;
