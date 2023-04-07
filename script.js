let cash = 10;
const cash3 = "35";

// Tipo string
const text = "Essa loja tem um desconto";
const desconto = "15%";

// Tipo Number
const number = 0.5 / 12;

// Tipo Array
const lista = [10, 20, "string", [2, 3, 4], { cor: "Marrom" }];

// Tipo Object
const cadeira = {
  cor: "Preto",
  preco: 400,
  lojas: ["Magazine luiza", "Kabum"],
  script: {
    linguagem: "Javascript",
  },
};

// Desestruturação de objetos
const lojas = cadeira.lojas;
const { cor, preco } = cadeira;

// Adicionando novos elementos no objeto
cadeira.desconto = "15%";

//Template String
console.log(`A nota do ${nome} é igual a ${nota}`);

// Tipo boolean
const rain = true;

// Truthy - Qualquer coisa

// Falsy
// 0
// Undefined
// null
// NaN

const price = 100;
const percent = 12;
const secondPercent = true;

// Condicionais

if (percent == 0) {
  console.log("Não temos desconto para essa cadeira");
  if (secondPercent) {
    console.log("Você deu sorte hoje, temos outro desconto!");
  }
} else if (percent > 10) {
  console.log("É maior do que 10");
} else {
  console.log(`Temos um desconto de ${percent}%`);
}
