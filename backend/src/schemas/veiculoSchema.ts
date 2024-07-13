import { z } from "zod";

export const veiculoSchema = z.object({
  placa: z.string().min(7).max(7),
  marca: z.string(),
  modelo: z.string(),
  ano: z.number().min(1900).max(new Date().getFullYear()),
  cor: z.string(),
  motoristaId: z.number(),
});
