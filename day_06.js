let frutas = ['Banana', 'Coco', 'Melancia'];
let laticinios = ['Iogurte'];
let congelados = [];
let doces = [];

let nomeCategoria, numCategoria, item;
let listaHTML = document.getElementById('listaDeCompras');
atualizaLista();

// Correlaciona número e categoria.
function obterCategoria(numCategoria) {
    switch (numCategoria) {
        case 1:
            return frutas;
        case 2:
            return laticinios;
        case 3:
            return congelados;
        case 4:
            return doces;
        default:
            return null;
    }
}

// Função auxiliar para gerar o texto de uma categoria
function gerarTextoCategoria(nome, itens) {
    if (itens.length > 0) {
        let textoCategoria = `${nome}:\n`;
        itens.forEach((item, index) => {
            textoCategoria += `${index + 1}. ${item}\n`;
        });
        textoCategoria += '\n';  // Adiciona uma linha em branco entre categorias
        return textoCategoria;
    }
    return '';
}

function atualizaLista() {
    let listaFinal = '';

    // Gera o texto para cada categoria, usando a função auxiliar
    listaFinal += gerarTextoCategoria('Frutas', frutas);
    listaFinal += gerarTextoCategoria('Lacticínios', laticinios);
    listaFinal += gerarTextoCategoria('Congelados', congelados);
    listaFinal += gerarTextoCategoria('Doces', doces);

    listaHTML.innerText = listaFinal.trim() || 'Sua lista está vazia.\n';  // Remove espaços em branco extras no final
}


function adicionar() {

    while (true) {
        numCategoria = parseInt(prompt('Qual a categoria que gostaria de adicionar:\n 1) Frutas\n 2) Lacticínios\n 3) Congelados\n 4) Doces\n\n Difite apenas o número.'));

        // Clicar 'cancelar' sai do loop.
        if (numCategoria === null) {
            return;
        }

        // Busca a categoria pelo número.
        nomeCategoria = obterCategoria(numCategoria);

        // Pede o item, o adiciona à categoria e atualiza a lista.
        item = prompt(`Qual o item você gostaria de adicionar à categoria?`);
        if (item) {
            nomeCategoria.push(item);
            atualizaLista();
            break;
        }

    }
}

function remover() {


}

function limpar() {
    frutas = [];
    laticinios = [];
    congelados = [];
    doces = [];
    atualizaLista();
}