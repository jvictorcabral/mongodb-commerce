// Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken

db.produtos
.find(
  { nome: { $nin: ["Big Mac", "McChicken"] },
},
{ nome: true, curtidas: true, vendidos: true, _id: false },
);