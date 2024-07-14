# Back end

## Para Devs


Execute o comando:

`npm install`

Você vai precisar criar um arquivo `.env`, altere as informações para o seu usuário e a sua senha:

```
NODE_ENV=development
PORT=4040
DATABASE_URL=mysql://usuário:senha@localhost:3306/detran

```

Após isso você vai precisar usar o comando para aplicar as migrações no banco de dados usando o Prisma:

`npx prisma migrate dev --name init`

Após aplicar as migrações, gere o cliente Prisma novamente para garantir que ele está atualizado com as últimas mudanças do schema:

`npx prisma generate`

Após isso será possível executar o sistema com o seguinte comando:

`npm run dev`

## Rotas
Para testar as rotas do back end você pode usar o Postman para fazer as requisições:

Para fazer as requisições especificas, use ao final da rota o parametro `:id`, forneça o id que você quer buscar.

rota
`http://localhost:4040/motoristas/`

```
{
    "id" : "3",
    "cpf": "01107654321",
    "nome": "Leandro",
    "vencimentoCnh": "2025-12-31",
    "categoriaCnh": "B"
}
```

rota:
`http://localhost:4040/multas`

```
{
  "valor": 250,
  "data": "2024-07-10T14:30:00.000Z",
  "pontos": 5,
  "tipo": "Velocidade acima da máxima permitida",
  "veiculoId": 2,
  "motoristaId": 2
}

```

rota:
`http://localhost:4040/veiculos`

```
{
  "placa": "ADF1234",
  "marca": "Honda",
  "modelo": "Go",
  "ano": 2022,
  "cor": "Prata",
  "motoristaId": 2
}
```