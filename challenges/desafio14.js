db.produtos
  .find(
    { ingredientes: "picles" },
    { nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 }, _id: false },
  );
