//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
 
let base = Number(prompt("Digite o valor da base do retângulo: "))
let altura = Number(prompt("Digite o valor da altura do retângulo: "))

const area = base * altura
const perimetro = base * 2 + altura * 2


alert("Área do retângulo: " + area)


alert("Perímetro do retângulo: " + perimetro )
