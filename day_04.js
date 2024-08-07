// Variáveis globais.
let numSecreto, totalTentativas, contadorTentativas;
const numMax = 50;
const botao = document.getElementById('botao');

// Inicializa o jogo.
function iniciar() {
    //Sorteia o número aleatório aleatório.
    numSecreto = Math.round(Math.random() * numMax) + 1;
    console.log(`Shhh. O número secreto é ${numSecreto}. Mas não conta pra ninguém!`);

    //Determina e avisa o número de tentativas.
    totalTentativas = 10;
    contadorTentativas = 0;
    imprime('chances', `Você tem ${totalTentativas} tentativas.`);
    imprime('msg','');
}

// Chama a função para iniciar o jogo.
iniciar();

// Atualiza o conteúdo HTML
function imprime(id, txt) {
    document.getElementById(id).innerText = txt;
}

// Retorna a forma correta de 'tentativa'.
function checaPluralTentativa() {
    return totalTentativas === 1 ? 'tentativa' : 'tentativas';
}

// Função executada ao clicar no botão.
function chutar() {
    //Recebe o valor digitado e limpa o campo para o próximo chute.
    let numChute = parseInt(document.getElementById('chute').value);
    document.getElementById('chute').value = '';
    document.getElementById('chute').focus();

    // Valida a entrada.
    if (isNaN(numChute) || numChute < 0 || chutar > numMax) {
        imprime('msg', 'Chute inválido. Tente novamente.');
        return;
    }
    // Processa o chute.
    totalTentativas--;
    contadorTentativas++;

    //Checa se houve acerto ou erro.
    if (numChute === numSecreto) {
        imprime('msg', 'Parabéns! Você ganhou.');
        imprime('chances', `Você acertou em ${contadorTentativas} ${checaPluralTentativa()}.`);

        botao.innerText = 'Reiniciar';
        botao.onclick = reiniciar;

    } else {
        if (numChute > numSecreto) {
            imprime('msg', `Que pena, você errou. O número sorteado é menor que ${numChute}`);
        } else {
            imprime('msg', `Que pena, você errou. O número sorteado é maior que ${numChute}`);
        }

        if (totalTentativas > 0) {
            imprime('chances', `Você ainda tem ${totalTentativas} ${checaPluralTentativa()}.`);
        } else {
            imprime('msg', 'Que pena. Você perdeu.');
            imprime('chances', 'Acabaram suas tentativas. Tente de novo.');
            botao.innerText = 'Reiniciar';
            botao.onclick = reiniciar;
        }
    }
}

function reiniciar() {
    //Devolve o jogo para seu status inicial;
    iniciar();

    // Muda o texto e função do botão de volta para "Chutar"
    botao.innerText = 'Chutar';
    botao.onclick = chutar;
}