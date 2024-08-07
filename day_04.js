let numSecreto, totalTentativas, contadorTentativas;
let numMax = 50;
let botao = document.getElementById('botao');

//Estado inicial do jogo
function iniciar() {
    //Determina o número máximo e sorteia um aleatório.
    numSecreto = Math.round(Math.random() * numMax) + 1;
    console.log(`Shhh. O número secreto é ${numSecreto}. Mas não conta pra ninguém!`);

    //Determina e avisa o número de chances.
    totalTentativas = 10;
    contadorTentativas = 0;
    imprime('chances', `Você tem ${totalTentativas} tentativas.`);
}

//Chama a função para iniciar o jogo.
iniciar();

//Imprime o 'txt' no 'id' informado dentro do HTML.
function imprime(id, txt) {
    document.getElementById(id).innerText = txt;
}

//Checa se no texto deve ser 'tentativa' ou 'tentativaS'.
function checaPluralTentativa() {
    return totalTentativas === 1 ? 'tentativa' : 'tentativas';
}

//Função executada quando o botão é clicado.
function chutar() {
    //Recebe o valor digitado e limpa o campo para o próximo chute.
    let numChute = parseInt(document.getElementById('chute').value);
    document.getElementById('chute').value = '';
    document.getElementById('chute').focus();

    //Checa se o chute é inválido.
    if (isNaN(numChute) || numChute < 0) {
        imprime('msg', 'Chute inválido. Tente novamente.');

        //Checa se ainda há chances de tentar.
    } else if (totalTentativas > 1) {
        totalTentativas--;
        contadorTentativas++;

        //Checa se houve acerto.
        if (numChute === numSecreto) {
            imprime('msg', 'Parabéns! Você ganhou.');
            imprime('chances', `Você acertou em ${contadorTentativas} ${checaPluralTentativa()}.`);

            // Muda o texto e função do botão para "Reiniciar"
            botao.innerText = 'Reiniciar';
            botao.onclick = reiniciar;

            //Havendo erro, avisa.
        } else {
            //Checa e avisa se o chute é menor ou maior que o número secreto.
            if (numSecreto < numChute) {
                imprime('msg', `Que pena, você errou. O número sorteado é menor que ${numChute}`);
                imprime('chances', `Você ainda tem ${totalTentativas} ${checaPluralTentativa()}.`);
            } else {
                imprime('msg', `Que pena, você errou. O número sorteado é maior que ${numChute}`);
                imprime('chances', `Você ainda tem ${totalTentativas} ${checaPluralTentativa()}.`);
            }
        }
        //Não havendo mais chances, avisa.
    } else {
        imprime('msg', 'Que pena. Você perdeu');
        imprime('chances', `Acabaram suas tentativas, tente de novo.`);

        // Muda o texto e função do botão para "Reiniciar"
        botao.innerText = 'Reiniciar';
        botao.onclick = reiniciar;
    }
}

function reiniciar() {
    //Devolve o jogo para seu status inicial;
    iniciar();

    // Muda o texto e função do botão de volta para "Chutar"
    botao.innerText = 'Chutar';
    botao.onclick = chutar;
}