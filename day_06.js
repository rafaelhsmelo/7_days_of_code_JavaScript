let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let nomeCategoria, numCategoria, item;
let listaHTML = document.getElementById('listaDeCompras');
listaHTML.innerText = 'Sua lista está vazia.\n';

function atualizaLista() {
    let listaFinal = '';

    //Checa se cada categoria está vazia para imprimir na lista.
    if (frutas.length > 0) {
        listaFinal += 'Frutas:\n';
        frutas.forEach((item, index) => {
            listaFinal += `${index + 1}. ${item}\n`;
        });
    }

    if (laticinios.length > 0) {
        listaFinal += 'Lacticínios:\n';
        laticinios.forEach((item, index) => {
            listaFinal += `${index + 1}. ${item}\n`;
        });
    }

    if (congelados.length > 0) {
        listaFinal += 'Congelados:\n';
        congelados.forEach((item, index) => {
            listaFinal += `${index + 1}. ${item}\n`;
        });
    }

    if (doces.length > 0) {
        listaFinal += 'Doces:\n';
        doces.forEach((item, index) => {
            listaFinal += `${index + 1}. ${item}\n`;
        });
    }

    listaHTML.innerText = listaFinal || 'Sua lista está vazia.\n';
}


function adicionar() {

    while (true) {
        numCategoria = parseInt(prompt('Qual a categoria que gostaria de adicionar:\n 1) Frutas\n 2) Lacticínios\n 3) Congelados\n 4) Doces\n\n Difite apenas o número.'));

        // Clicar 'cancelar' sai do loop.
        if (numCategoria === num) {
            return;
        }

        // Correlaciona número e categoria.
        switch (numCategoria) {
            case 1:
                nomeCategoria = frutas;
                break;
            case 2:
                nomeCategoria = laticinios
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

    // Pede o item, o adiciona à categoria e atualiza a lista.
    item = prompt(`Qual o item você gostaria de adicionar à categoria?`);
    if (item) {
        nomeCategoria.push(item);
        atualizaLista();
    }

}

function limpar() {
    frutas = [];
    laticinios = [];
    congelados = [];
    doces = [];
    atualizaLista();
}