//8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.

let raio = Number(prompt("Digite o raio da lata de óleo: "))
let altura = Number(prompt("Digite a altura da lata de óleo: "))

const volume = 3.14159 * Math.pow(raio, 2) * altura


alert("Volume da lata: " + volume)
