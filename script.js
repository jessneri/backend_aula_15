/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */
const chalk = require('chalk');

const listaDeProdutos = [{
        nome: "melancia",
        preco: 5,
        qtdDisponivel: 4
    }, {
        nome: "abacaxi",
        preco: 3,
        qtdDisponivel: 5
    },
    {
        nome: "banana",
        preco: 6,
        qtdDisponivel: 5
    }
];

const buscarProduto = (resposta) => {
    if (resposta === listaDeProdutos.nome) {
        console.log(`Yay! Temos seu produto ${chalk.green(nome_do_produto)}`)
    } else {
        console.log("Infelizmente não temos este produto.");
    }
}

rl.question("Qual produto você está procurando?", (resposta) => {
    console.log(resposta);
    buscarProduto(resposta);
});