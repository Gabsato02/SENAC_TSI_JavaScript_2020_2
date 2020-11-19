usuario = {
    nome: prompt("Digite seu nome: "),
    altura: parseInt(prompt("Digite sua altura: ")),
    peso: parseInt(prompt("Digite seu peso: ")),
};

function calcularIMC(usuario) {

    return (usuario.peso / (usuario.altura ^ 2)).toFixed(2);
};

function verificarIMC(imc) {

    if (imc < 18.5) {
        return `${usuario.nome}, seu IMC é ${imc}, e você está abaixo do peso - pode haver complicações por COVID19.`;
    } else {
        if (imc >= 18.5 && imc <= 24.9) {
            return `${usuario.nome}, seu IMC é ${imc}, e seu peso está normal - menor risco de complicações por COVID19.`;
        } else {
            if (imc >= 25 && imc <= 29.9) {
                return `${usuario.nome}, seu IMC é ${imc}, e você está acima do peso - baixo risco de complicações por COVID19.`;
            } else {
                if (imc >= 30 && imc <= 34.9) {
                    return `${usuario.nome}, seu IMC é ${imc}, e você está com obesidade grau 1  - risco de complicações por COVID19.`;
                } else {
                    if (imc >= 35 && imc <= 39.9) {
                        return `${usuario.nome}, seu IMC é ${imc}, e você está com obesidade grau 2 - alto risco de complicações por COVID19.`;
                    } else {
                        return `${usuario.nome}, seu IMC é ${imc}, e você está com obesidade mórbida  - altíssimo risco de complicações por COVID19.`;
                    }
                }
            }
        }
    }
}

console.log(verificarIMC(calcularIMC(usuario)));