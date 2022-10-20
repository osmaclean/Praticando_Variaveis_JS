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
alert(`O volume é de: ${volume}m³`);

// Quinta Tarefa

let valorInteiro = parseInt(prompt("Qual o valor inteiro?"));
let elevadoAoQuadrado = (valorInteiro * valorInteiro);
alert(`O valor ${valorInteiro} ao quadrado é ${elevadoAoQuadrado}`);

// Sexta Tarefa

let valor1 = parseFloat(prompt("Escreva o primeiro número"));
let valor2 = parseFloat(prompt("Escreva o segundo número"));
let valor3 = parseFloat(prompt("Escreva o terceiro número"));
let valor4 = parseFloat(prompt("Escreva o quarto número"));
let valor5 = parseFloat(prompt("Escreva o quinto número"));
let somaValores = (valor1 + valor2 + valor3 + valor4 + valor5);
let mediaValores = somaValores / 5;
alert(`A soma dos valores informador é: ${somaValores} e a média das notas é: ${mediaValores.toFixed(2)}`);

// Sétima Tarefa

let inteiro1 = parseInt(prompt("Escreva o primeiro número inteiro"));
let inteiro2 = parseInt(prompt("Escreva o segundo valor inteiro"));
let restoDivisao = (inteiro1 % inteiro2);
alert(`O resto da divisão de ${inteiro1} por ${inteiro2} é: ${restoDivisao}`);

// Obs: Para calcular o resto usa-se o sinal de percentagem %

// Oitava Tarefa 

let palavraFrase = (prompt("Escreva uma palavra ou frase"));
let comprimentoFrase = palavraFrase.length;
alert(`Esse texto tem ${comprimentoFrase} caracteres`)

// Nona Tarefa 

let frasePalavra = (prompt("Escreva uma frase ou palavra"));
let primeiraLetra = frasePalavra[0].toUpperCase();
let ultimaLetra = frasePalavra[frasePalavra.length -1].toLowerCase();
alert(`A primeira letra deste texto é ${primeiraLetra} e a última é a ${ultimaLetra}`);

// Obs: Para deixar o texto em caixa alta usa-se o "toUpperCase()" e para deixar em
//caixa baixa usa-se o "toLowerCase()"

// Obs 2: Para calcular e armazenar a ultima letra de uma frase/palavra usa-se o "[]" e
//dentro dele chamasse a variável e acrescenta ".length -1"
// Exemplo: [frasePalavra.length -1]

// Décima Tarefa

let nomeSobrenome = (prompt("Escreva o seu nome e sobrenome")).toUpperCase();
let idade = parseInt(prompt("Escreva a sua idade"));
let setor = (prompt("Escreva o setor a qual presta serviços"));
alert(`Nome: ${nomeSobrenome} - Idade: ${idade} - Setor: ${setor}`);

alert(`Page made by: Lucas Maclean`);








































































































