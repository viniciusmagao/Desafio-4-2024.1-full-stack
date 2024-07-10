# Back end

Para testar as rotas do back end você pode usar o Postman para fazer as requisições:

Para fazer as requisições especificas, use ao final da rota o parametro `:id`, forneça o id que você quer buscar.

rota
`http://localhost:4040/motoristas/`

`
{
    "id" : "3",
    "cpf": "01107654321",
    "nome": "Leandro",
    "vencimentoCnh": "2025-12-31",
    "categoriaCnh": "B"
}
`

rota:
`http://localhost:4040/multas`

`
{
  "valor": 250,
  "data": "2024-07-10T14:30:00.000Z",
  "pontos": 5,
  "tipo": "Velocidade acima da máxima permitida",
  "veiculoId": 2,
  "motoristaId": 2
}

`

rota:
`http://localhost:4040/veiculos`

`
{
  "placa": "ADF1234",
  "marca": "Honda",
  "modelo": "Go",
  "ano": 2022,
  "cor": "Prata",
  "motoristaId": 2
}
`