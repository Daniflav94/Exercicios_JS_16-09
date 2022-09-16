//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

const raio = Number(prompt("Digite o valor do raio de uma circunferência: "))


const area = 3.14 * Math.pow(raio, 2)
const perimetro = 2 * 3.14 * raio

alert("Área da circunferência: " + area)
alert("Perímetro da circunferência: " + perimetro)