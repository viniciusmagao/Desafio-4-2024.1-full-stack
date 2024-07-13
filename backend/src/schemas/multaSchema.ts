import { z } from "zod";

export const multaSchema = z.object({
  valor: z.number().positive(),
  data: z.string(),
  pontos: z.number().min(0),
  tipo: z.enum([
    "Velocidade acima da máxima permitida",
    "Estacionar em local proibido",
    "Dirigir utilizando o celular",
    "Dirigir sob efeito de álcool",
    "Não utilizar cinto de segurança",
    "Avançar o sinal vermelho",
  ]),
  veiculoId: z.number().int(),
});
