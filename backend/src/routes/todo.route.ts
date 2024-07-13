// import express from "express";
// import { motoristaSchema } from "../schemas/todo.schema";
// import * as motoristaRepository from "../repositories/motoristaRepository";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   const motoristas = await motoristaRepository.getAllMotoristas();
//   res.json(motoristas);
// });

// router.post("/", async (req, res) => {
//   try {
//     const data = motoristaSchema.parse(req.body);
//     const motorista = await motoristaRepository.createMotorista(data);
//     res.status(201).json(motorista);
//   } catch (e) {
//     res.status(400).json({ error: e.errors });
//   }
// });

// // Rotas para update, delete, etc.

// export default router;
