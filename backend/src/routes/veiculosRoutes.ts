import express from "express";
import { veiculoSchema } from "../schemas/veiculoSchema";
import * as veiculoRepository from "../repositories/veiculoRepository";

const router = express.Router();

router.get("/", async (req, res) => {
  const veiculos = await veiculoRepository.getAllVeiculos();
  res.json(veiculos);
});

router.post("/", async (req, res) => {
  try {
    const data = veiculoSchema.parse(req.body);
    const veiculo = await veiculoRepository.createVeiculo(data);
    res.status(201).json(veiculo);
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});


export default router;
