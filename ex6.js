//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

let num1 = Number(prompt("Digite o primeiro número inteiro: "))
let num2 = Number(prompt("Digite o segundo número inteiro: "))

const resultado = num1 / num2
const resto = num1 % num2

alert("Resultado divisão: " + resultado)
alert("Resto da divisão: " + resto)