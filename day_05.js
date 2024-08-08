let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let nomeCategoria, numCategoria, item;
let listaHTML = document.getElementById('listaDeCompras');
listaHTML.innerText = 'Sua lista está vazia.\n';

function atualizaLista() {
    if (frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0) {
        listaHTML.innerText = 'Sua lista está vazia.\n';
    } else {
        listaHTML.innerText = `Frutas: \n ${frutas.join('\n')}\n
                               Lacticínios: \n ${laticinios.join('\n')}\n
                               Congelados: \n ${congelados.join('\n')}\n
                               Doces: \n ${doces.join('\n')}\n`
    }
}

function adicionar() {

    while (true) {
        numCategoria = parseInt(prompt('Qual a categoria que gostaria de adicionar:\n 1) Frutas\n 2) Lacticínios\n 3) Congelados\n 4) Doces\n\n Difite apenas o número.'));
        switch (numCategoria) {
            case 1:
                nomeCategoria = frutas;
                break;
            case 2:
                nomeCategoria = laticínios
                break;
            case 3:
                nomeCategoria = congelados
                break;
            case 4:
                nomeCategoria = doces
                break;

            default:
                alert('Desculpe, não entendi. Tente novamente.');
                continue;
        }
        break;
    }
    console.log(nomeCategoria);

    item = prompt(`Qual o item você gostaria de adicionar à categoria ${nomeCategoria}?`);

    console.log(item);

    nomeCategoria.push(item);

    atualizaLista();

}

function limpar() {
    frutas = [];
    laticinios = [];
    congelados = [];
    doces = [];
    atualizaLista();
}