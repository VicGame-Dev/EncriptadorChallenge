//declarar variables//
let textoAEncriptar = document.querySelector("#textoAEncriptar");
let historial = document.querySelector("#historial");
let textoADesencriptar = document.querySelector("#textoADesencriptar");
var historialLista = [,];
const matriz = [
    ['e','enter'],
    ['i','imes'],
    ['a','ai'],
    ['o','ober'],
    ['u','ufat'],
]

//proceso//
function tomarTexto() {
    let  textoNormal = textoEncriptar(textoAEncriptar.value.toLowerCase());
    textoADesencriptar.value = textoNormal;
}
function textoEncriptar(textoParaEncriptar) {
    for (let i = 0; i < matriz.length; i++) {
        if (textoParaEncriptar.includes(matriz[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(matriz [i][0], matriz [i][1])
        }
    }
    return textoParaEncriptar;
}
function copiarEncriptado(textoACopiar) {
    navigator.clipboard.writeText(textoADesencriptar.value);
    historialLista.unshift(textoADesencriptar.value);
    historial.value = historialLista;
    textoADesencriptar.value = "";
}
function tomarTextoEncriptado() {
    let textoAnormal = textoDesencriptar(textoADesencriptar.value.toLowerCase());
    textoAEncriptar.value = textoAnormal
}
function textoDesencriptar(textoParaDesencriptar) {
    for (let i = 0; i < matriz.length; i++) {
        if (textoParaDesencriptar.includes(matriz[i][1])) {
            textoParaDesencriptar = textoParaDesencriptar.replaceAll(matriz [i][1], matriz [i][0]);
        }
    }
    return textoParaDesencriptar;
}
function copiarDesencriptado(textoACopiar) {
    navigator.clipboard.writeText(textoAEncriptar.value);
    historialLista.unshift(textoAEncriptar.value);
    historial.value = historialLista;
    textoAEncriptar.value = "";
}
function borrarHistorial() {
    historial.value = "";
    historialLista  = [];
}
/* 
Reglas:
La letra "e" es convertida para "enter" 
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/