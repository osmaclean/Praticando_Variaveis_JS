// Primeira Tarefa

let valorGasolina = `R$` + 6.8;
let recargaGasolina = parseFloat(prompt("Quanto em dinheiro deseja abastecer?"));
let litrosRecarregados = parseFloat(recargaGasolina / 6.8);
alert(`O cliente abasteceu ${litrosRecarregados.toFixed(2)} litros de gasolina`);


// Segunda Tarefa

let grausCelsius = parseFloat(prompt("Quantos graus Celsius?"))
let grausFahrenheit = (9 * grausCelsius + 160) / 5
alert(`A temperatura de ${grausCelsius}ºC em Fahrenheit é de ${grausFahrenheit.toFixed(2)}ºF`)

