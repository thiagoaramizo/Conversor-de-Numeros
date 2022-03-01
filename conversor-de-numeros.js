var campo_decimal = document.getElementById("decimal");
var campo_binario = document.getElementById("binario");

campo_decimal.onkeyup = function () {
    campo_binario.value = converter_para_binario(campo_decimal.value);
}

campo_binario.onkeyup = function () {
    campo_decimal.value = converter_para_decimal(campo_binario.value);
}

function converter_para_binario(n) {
    let restos_divisao = new Array();
    let numero = n;
    //Para a conversão fazemos sucessivas divisões por 2:
    while (numero >= 1) {
        // Calcular e salvar o resto no array a esquerda;
        restos_divisao.unshift(numero % 2);
        // Dividir o número por 2 e usar o resultado
        numero = Math.floor(numero / 2);
    }
    return restos_divisao.join('');

}

function converter_para_decimal(n) {
    let numeros = n.split('').reverse();
    let resultado = 0;
    for (let i = numeros.length; i > 0; i--) {
        resultado = resultado + (parseInt(numeros[i - 1]) * (2 ** (i - 1)));
    }
    return resultado;
}