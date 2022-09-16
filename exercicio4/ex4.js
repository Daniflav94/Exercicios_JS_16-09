//4. Dado os três lados de um triângulo determinar o perímetro do mesmo

const lado1 = Number(prompt("Digite o valor do lado de um triângulo: "))
const lado2 = Number(prompt("Digite o valor do outro lado do triângulo: "))
const base = Number(prompt("Digite o valor da base do triângulo: "))


const perimetro = lado1 + lado2 + base

alert("Perímetro do triângulo: " + perimetro)