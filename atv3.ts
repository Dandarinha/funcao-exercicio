/*
nome:Dandara Gabrielli Santos Domingos
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
*/

console.clear();

const teclado = require(`prompt-sync`)();

function calcularVolumeDaEsfera(raio:number) {
    const pi = 3.14;
    const volume = (4 / 3) * pi * (raio * raio * raio);
    return volume;
}

let raioEsfera = parseFloat(teclado(`Digite o raio da esfera:`));
let volumeEsfera = calcularVolumeDaEsfera(raioEsfera);
console.log("O volume da esfera com raio", raioEsfera, `é: ${volumeEsfera}`);













