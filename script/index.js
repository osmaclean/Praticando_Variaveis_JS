let valorGasolina = `R$` + 6.8;
let recargaGasolina = parseFloat(prompt("Quanto em dinheiro deseja abastecer?"));
let litrosRecarregados = parseFloat(recargaGasolina / 6.8);
alert(`O cliente abasteceu ${litrosRecarregados.toFixed(2)}`);
console.log(valorGasolina)
