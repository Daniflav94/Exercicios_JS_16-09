//2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

const lado = Number(prompt("Digite o valor de um lado do quadrado: "))


const area = lado * lado
const perimetro = lado + lado + lado + lado

alert("Área do quadrado: " + area)
alert("Perímetro do quadrado: " + perimetro)