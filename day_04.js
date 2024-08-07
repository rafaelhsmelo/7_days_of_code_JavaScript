//Sorteia um número aleatório e registra no log.
let numSecreto = Math.round(Math.random() * 50 + 1);
console.log(numSecreto);

//Imprime o 'txt' no 'id' informado dentro do HTML.
function imprime(id, txt) {
    document.getElementById(id).innerText = txt;
}

//Checa se no texto deve ser 'tentativa' ou 'tentativaS'.
function checaPluralTentativa() {
    if (totalTentativas == 1) {
        return 'tentativa';
    } else {
        return 'tentativas';
    }
}

//Determina e avisa o número de chances.
let totalTentativas = 10;
let contadorTentativas = 0;
imprime('chances', `Você tem ${totalTentativas} tentativas.`);

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
        if (numChute == numSecreto) {
            imprime('msg', 'Parabéns! Você ganhou.');
            imprime('chances', `Você acertou em ${contadorTentativas} ${checaPluralTentativa()}.`);

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
    }
}





