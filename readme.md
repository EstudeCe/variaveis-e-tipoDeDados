## Variáveis e tipos de dados

O intuito desta primeira aula é abordar os conceitos iniciais sobre variáveis e tipos de dados existentes no JavaScript. E iniciar os estudos de condicionais utilizando operadores lógicos.

**Criar e vincular o script no HTML**

Criei um arquivo index.html, e la no final do body passei a tag script com o atributo src e o caminho do arquivo script

```
<body>
    <script src="script.js"></script>
</body>
```

**Criando variáveis**

Nós podemos criar variáveis utilizar o const ou let. E a diferença entre as duas é que utilizando o const, não podemos atribuir um novo valor para aquela variável. Já utilizando o let, a variável pode receber um novo valor sempre que for necessário realizar a alteração.

```
const cash = 10.2;
let cash2 = 1500;
```

**Tipos de variáveis**

Todas as variáveis, sejam elas criadas utilizando const ou let, são criadas obedecendo uma determinada tipagem, que são os tipos String, Number, Array, Object, e Boolean. Esse tipo é o que vai definir o comportamento e como vamos utilizar a variável.

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

**Tipo String**

As variáveis do tipo string são frases e palavras, que utilizamos passando aspas no inicio e no final da variável. Com esse tipo de variável, podemos realizar a concatenação, que é unir duas strings.

```
const text = "Essa loja tem um desconto de";
const desconto = "15%";
console.log(text + desconto);
// Essa loja tem um desconto de 15%
```

**Tipo Number**

As variáveis do tipo number são os números como já conhecemos. E com eles, podemos realizar operações matemáticas.

```
const number = 0.5 / 12
```

**Tipo Array(Lista)**

Um array é uma lista ordenada de valores, e esses valores podem assumir qualquer tipo de variável. Uma lista é ordenada através do index, que começa do zero e vai até o último elemento menos 1. Podemos acessar os elementos através desse index.

```
const lista = [10, 20, 30, 20.1, "string", true, {}, [10, 20]];
```

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

**Tipo Object**

O tipo objeto é uma lista de pares chave:valor. Inserimos chaves únicas nesse objeto, e os valores podem assumir qualquer tipo de variável, da mesma forma que uma lista.

```
const cadeira = {
  cor: "Marrom",
  tamanho: "Grande",
  preco: 100,
  script: {
    linguagem: "JavaScript",
  },
  lojas: ["Magazine luiza", "Kabum"],
};
```

**Tipo Boolean**

Os booleanos são variáveis utilizadas nas operações lógicas, e temos apenas duas: true e false. Podemos converter outros tipos de variáveis para o tipo boolean utilizando o operador Boolean.

```
console.log(Boolean(cash));
//true
```

A partir disso, temos valores que são Truthy e Falsy. De maneira que os valores Truthy retornar true quando convertidos para boolean, e os valores Falsy retornam false quando convertidos para boolean.

```
// Truthy
// Todos os valores

// Falsy
Boolean(null)
Boolean(undefined)
Boolean(0)
Boolean(NaN)
```

**Condicionais**

Uma condicional é uma operação que estruturamos para ser realizada dependendo de alguma condição. Essa condição é chamada de condição lógica. E para utilizar uma condicional, utilizamos os operadores:

if → Para executar um bloco de código caso a condição lógica retorne true

else if → Para adicionar um novo bloco de código que depende de uma segunda condição lógica

else → Para executar um bloco de código caso a condição lógica retorne false

```
const price = 100;
const percent = 10;
if (percent == 0) {
  console.log("não houve desconto");
} else {
  console.log("houve desconto");
}
```

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

## Homework

#### 01

Faça um script que leia duas notas de um aluno. E calcule se o aluno foi aprovado. Sabendo que a média para ser aprovado é 7

#### 02

Armazene o salário do usuário em uma variável, e faça as seguintes condições.

Se o salário for até R$1000

- Imprima no console (Você merece um aumento de 40%)
- Calcule o novo salário

Se o salário esta entre R$1000 e R$ 2000

- Imprima no console (Você merece uma aumento de 25%)
- Calcule o novo salário

Se o salário for maior do que R$ 2000

- Imprima no console (Você deve doar se salário para o estagiário)
- Calcule o salário com um desconto de 15%

Para todas as opções, além de imprimir o que foi solicitado, você também vai adicionar no console:

- Salário antes do reajuste: (resultado)
- Percentual adicionado ou descontado: (resultado)
- Valor do aumento ou desconto: (resultado)
- Novo salário: (resultado)
