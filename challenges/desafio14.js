db.produtos
  .find(
    { ingedientes: "picles" },
    { nome: true, ingredientes: true, valoresNutricionais: { $splice: 3 } },
  );