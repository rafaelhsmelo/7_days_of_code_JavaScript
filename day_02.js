let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let pergunta = prompt(`Você gosta de estudade ${limguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (pergunta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else if (pergunta == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}