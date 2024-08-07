//Sorteia um número aleatório e registra no log.
let numSecreto = Math.round(Math.random() * 50 + 1);
console.log(numSecreto);

let chances = 10;

//Imprime o 'txt' no 'id' informado dentro do HTML.
function imprime(id, txt) {
    document.getElementById(id).innerText = txt;
}
imprime('chances', `Você tem ${chances} chances.`);

//Checa se o número digitado é igual ao sorteado.
function chutar() {
    let chute = parseInt(document.getElementById('chute').value);
    document.getElementById('chute').value = '';
    console.log(chute);
    tentativas = 0;
    imprime('msg', '');

    while (tentativas < chances) {
        if (chances > 0) {

            if (isNaN(chute) || chute < 1) {
                imprime('msg', 'Chute inválido, tente novamente.');
                break;
            } else if (chute == numSecreto) {
                imprime('msg', 'Parabéns! Você acertou.');
                break;
            } else {
                imprime('msg', 'Que pena! Você errou.');
                chances--;
                imprime('chances', `Você tem ${chances} chances.`)
                break;
            }

        } else {
            imprime('msg', 'Que pena! Você perdeu.')
        }
    }
        // while (isNaN(chute) || chute < 0) {
        //     imprime('msg', 'Chute inválido, tente novamente.');
        //     break;
        // }

        // for (let tentativas = 0; tentativas < chances; tentativas++) {
        //     if (chute) {

        //     } else {

        //     }
        // }

    }
//Avisa do número e quantidade de tentativas
//Pede o chute e checa se é válido
//Checa se ainda há tentativas disponíveis e tenta de novo
