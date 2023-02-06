const nome = document.getElementById('nome');
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


function calculator() {

    var IMC = parseFloat(peso.value).toFixed(2) / parseFloat(altura.value).toFixed(2);
    

    if (IMC < 18.5) {
        document.getElementById("resultado").value = ("Seu IMC é " + IMC.toFixed(2)+ " -> abaixo do peso");
    }
    else if (IMC <= 18.5 || IMC < 25) {
        document.getElementById("resultado").value = ("Seu IMC é " + IMC.toFixed(2) + " -> peso normal");
    } else {
        document.getElementById("resultado").value = ("Seu IMC é " + IMC.toFixed(2)+ " -> sobrepeso");
    }
    
}

calcular.addEventListener('click', calculator);

