let lakers = {
    Jogo1: 89,
    Jogo2: 120,
    Jogo3: 103,
    Jogo4: 100,
};

let goldenstate = {
    Jogo1: 97,
    Jogo2: 105,
    Jogo3: 110,
    Jogo4: 99,
};

let cavaliers = {
    Jogo1: 90,
    Jogo2: 117,
    Jogo3: 108,
    Jogo4: 89,
};

let NBA = {
    "lakers": lakers,
    "goldenstate": goldenstate,
    "cavaliers": cavaliers,
};

// Display no console de todos os times com suas respectivas pontuações + a informação de qual possui a melhor média
console.log(NBA);
console.log(`${melhorTime()} foi o time com a melhor média!`);

// Função para comparar qual é o melhor time, retornando seu nome
function melhorTime() {

    if (calcMedia(lakers) > calcMedia(goldenstate) && (calcMedia(lakers) > calcMedia(cavaliers))) {
        return "Los Angeles Lakers";
    } else if (calcMedia(goldenstate) > calcMedia(cavaliers)) {
        return "Golden State Warriors";

    } else {
        return "Cleveland Cavaliers";
    }
}

// Função que calcula o total de pontos que o time fez
function pontosTotais(time) {

    let total = 0;
    // Enquanto o contador for menor que o número de atributos do JSON, a variável Total recebe o valor de cada posição
    for (let i = 1; i <= Object.keys(time).length; i++) {
        total += time[`Jogo${i}`];
    }

    return total;
}

// Função que recebe o nome do time para calcular a média
function calcMedia(time) {

    let media = pontosTotais(time) / (Object.keys(time).length);

    return media;

};