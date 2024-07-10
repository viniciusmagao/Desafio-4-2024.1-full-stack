import { Router } from 'express';
import { createMulta, getAllMultas, getMultaById, updateMulta, deleteMulta } from '../repositories/multaRepository';

const router = Router();

router.post('/', async (req, res) => {
  try {
    console.log('Recebendo requisição para criar multa:', req.body);
    const data = req.body;

    if (!data.motoristaId) {
      throw new Error('O campo motoristaId é obrigatório.');
    }
    if (!data.veiculoId) {
      throw new Error('O campo veiculoId é obrigatório.');
    }

    const newMulta = await createMulta(data);
    res.status(201).json(newMulta);
  } catch (error) {
    console.error('Erro ao criar multa:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const multas = await getAllMultas();
  res.json(multas);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const multa = await getMultaById(id);
  if (multa) {
    res.json(multa);
  } else {
    res.status(404).json({ error: 'Multa não encontrada' });
  }
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const updatedMulta = await updateMulta(id, data);
    res.json(updatedMulta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await deleteMulta(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
