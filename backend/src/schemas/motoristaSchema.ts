import { z } from "zod";

export const motoristaSchema = z.object({
  cpf: z.string().min(11).max(11),
  nome: z.string(),
  vencimentoCnh: z.string(),
  categoriaCnh: z.enum(["A", "B", "AB"]),
});
