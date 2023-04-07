let cash = 10;
// var cash2 = 20;

const cash3 = "35";

// Tipo string
const text = "Essa loja tem um desconto";
const desconto = "15%";

// Tipo Number
const number = 0.5 / 12;
// console.log(100 % 9);

// Tipo Array - lista
const lista = [10, 20, "string", [2, 3, 4], { cor: "Marrom" }];
// Voltar aqui para acessar os index

// Tipo Object - Objeto
// Par chave valor
const cadeira = {
  cor: "Preto",
  preco: 400,
  lojas: ["Magazine luiza", "Kabum"],
  script: {
    linguagem: "Javascript",
  },
};

// Desestruturação
// const cor = cadeira.cor
const lojas = cadeira.lojas;
// const preco = cadeira.preco
// const script = cadeira.script;
const { cor, preco } = cadeira;
cadeira.desconto = "15%";
// console.log(preco, "preco");

const teste = [
  {
    nome: "Vitor",
    nota: 10,
  },
  {
    nome: "Erika",
    nota: 10,
  },
  {
    nome: "Joaquim",
    nota: 7,
  },
];

const aluno = teste[1];
const { nota, nome } = aluno;
// console.log("A nota do " + nome + " é igual a " + nota);
//Template String
// console.log(`A nota do ${nome} é igual a ${nota}`);

// Tipo boolean
const rain = true;

// Truthy - Qualquer coisa

// Falsy
// 0
// Undefined
// null
// NaN

const desconto2 = Boolean(NaN);

const price = 100;
const percent = 12;
const secondPercent = true;

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
