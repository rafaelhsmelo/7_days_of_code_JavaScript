let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');

//Garante que idade é um número & maior que zero
while (isNaN(idade) || idade < 0) {
    idade = prompt('Não entendi. Quantos anos você tem?');
}

let linguagem = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let pergunta = prompt(`Você gosta de estudadar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);


//Garante que a resposta é válida
while (isNaN(pergunta) || pergunta < 1 || pergunta > 2) {
    pergunta = prompt(`Não entendi. Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
}

if (pergunta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else if (pergunta == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}