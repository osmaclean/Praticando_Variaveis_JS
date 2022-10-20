// Primeira Tarefa

let valorGasolina = `R$` + 6.8;
let recargaGasolina = parseFloat(prompt("Quanto em dinheiro deseja abastecer?"));
let litrosRecarregados = parseFloat(recargaGasolina / 6.8);
alert(`O cliente abasteceu ${litrosRecarregados.toFixed(2)} litros de gasolina`);


// Segunda Tarefa

let grausCelsius = parseFloat(prompt("Quantos graus Celsius?"));
let grausFahrenheit = (9 * grausCelsius + 160) / 5;
alert(`A temperatura de ${grausCelsius}ºC em Fahrenheit é de ${grausFahrenheit.toFixed(2)}ºF`);

// Terceira Tarefa

let gFahrenheit = parseFloat(prompt("Quantos graus Fahrenheit?"));
let gCelsius = ((gFahrenheit - 32) * 5) / 9;
alert(`A temperatura de ${gFahrenheit}ºF em Celsius é de ${gCelsius.toFixed(2)}ºC`);

// Quarta Tarefa

let comprimento = parseFloat(prompt("Qual o comprimento?"));
let largura = parseFloat(prompt("Qual a largura?"));
let altura = parseFloat(prompt("Qual a altura?"));
let volume = `${comprimento}` * `${largura}` * `${altura}`;
alert(`O volume é de: ${volume}m³`)























































































































