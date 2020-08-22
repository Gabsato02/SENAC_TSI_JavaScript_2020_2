// Aula 1 - IMC - Gabriel Sato

let peso = prompt("Digite seu peso.").replace(",",".");
let altura = prompt("Digite sua altura em cm.");

let imc = (peso / ((altura / 100) ** 2)).toFixed(2);

if (imc < 18.5) {
    alert(`Seu IMC é ${imc}, e você está abaixo do peso - pode haver complicações por COVID19.`);
} else {
    if (imc >= 18.5 && imc <= 24.9) {
        alert(`Seu IMC é ${imc}, e seu peso está normal - menor risco de complicações por COVID19.`);
    } else {
        if (imc >= 25 && imc <= 29.9) {
            alert(`Seu IMC é ${imc}, e você está acima do peso - baixo risco de complicações por COVID19.`);
        } else {
            if (imc >= 30 && imc <= 34.9) {
                alert(`Seu IMC é ${imc}, e você está com obesidade grau 1  - risco de complicações por COVID19.`);
            } else {
                if (imc >= 35 && imc <= 39.9) {
                    alert(`Seu IMC é ${imc}, e você está com obesidade grau 2 - alto risco de complicações por COVID19.`);
                } else {
                    alert(`Seu IMC é ${imc}, e você está com obesidade mórbida  - altíssimo risco de complicações por COVID19.`);
                }
            }
        }
    }
};