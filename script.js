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

let posicao;

const buscarProduto = (resposta) => {
    let temProduto = false;
    for (i = 0; i < listaDeProdutos.length; i++) {
        if (listaDeProdutos[i].nome === resposta) {
            temProduto = true;
            posicao = i;

        }
    }

    if (temProduto) {
        console.log(`Yay! Temos seu produto ${chalk.green(resposta)}`)
        quantidadeDaCompra();
    } else {
        produtoNegado(resposta);
    }
}

const produtoNegado = (resposta) => {
    console.log(`Não temos o produto ${chalk.red(resposta)}.`)
    rl.question("Deseja continuar a sua compra? \n", (escolha) => {
        if (escolha === "Sim" || escolha === "sim") {
            rl.question("Qual produto você está procurando? \n", (resposta) => {
                buscarProduto(resposta);
            });
        } else if (escolha === "Não" || escolha === "não") {
            rl.close();
        }
    })
}

const quantidadeDaCompra = () => {
    let quantidadeProduto = listaDeProdutos[posicao];
    rl.question("Quantos produtos você quer?", (resposta2) => {
        if (resposta2 > quantidadeProduto.qtdDisponivel) {
            console.log(`Não temos esta quantidade, temos ${chalk.yellow(quantidadeProduto.qtdDisponivel)} no estoque. \n`);
            rl.question("Deseja comprar o estoque?", (resposta3) => {
                if (resposta3 === "Sim" || resposta3 === "sim") {
                    console.log(`O valor da compra ${chalk.green("R$" + valorFinal() + ",00")} \n`)
                    rl.question("Deseja confirmar a compra?", (resposta4) => {
                        if (resposta4 === "Sim" || resposta4 === "sim") {
                            despedida();
                        } else if (resposta4 === "Não" || resposta4 === "não") {
                            despedida();
                        }
                    })
                } else if (resposta3 === "Não" || resposta3 === "não") {
                    despedida();
                }
            })

        } else if (resposta2 <= quantidadeProduto.qtdDisponivel) {
            console.log("Temos esta quantidade! \n");
            rl.question("Deseja efetuar a compra?", (resposta5) => {
                if (resposta5 === "Sim" || resposta5 === "sim") {
                    console.log(`O valor da compra ${chalk.green("R$" + valorFinal() + ",00")} \n`)
                    rl.question("Deseja confirmar a compra?", (resposta4) => {
                        if (resposta4 === "Sim" || resposta4 === "sim") {
                            despedida();
                        } else if (resposta4 === "Não" || resposta4 === "não") {
                            despedida();
                        }
                    })
                } else if (resposta5 === "Não" || resposta5 === "não") {
                    despedida();
                }
            })
        }
    })
}

const valorFinal = () => {
    let quantidadeProduto = listaDeProdutos[posicao];
    let pagamento = quantidadeProduto.qtdDisponivel * quantidadeProduto.preco;
    return pagamento;
}

const despedida = () => {
    console.log("Agradecemos a preferencia e volte sempre!");
    rl.close();
}

rl.question("Qual produto você está procurando? \n", (resposta) => {
    buscarProduto(resposta);
});