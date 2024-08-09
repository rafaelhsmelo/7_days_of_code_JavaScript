let frutas = ['Banana', 'Coco', 'Melancia'];
let laticinios = ['Iogurte'];
let congelados = [];
let doces = [];

let numCategoria, nomeCategoria;

let listaHTML = document.getElementById('listaDeCompras');
listaTotal();

// Indexa as categorias
function recebeCategoria(msg) {

    // Atribui números às categorias
    while (true) {
        numCategoria = prompt(`${msg}\n 1) Frutas\n 2) Lacticínios\n 3) Congelados\n 4) Doces\n\n Digite apenas o número.`);

        // Opção de cancelar
        if (numCategoria === null) {
            return;
        }

        switch (parseInt(numCategoria)) {
            case 1:
                return frutas;
            case 2:
                return laticinios;
            case 3:
                return congelados;
            case 4:
                return doces;
            default:
                alert('Desculpe, não entendi.\nTente novamente.');
                continue;
        }
    }
}

// Lista e indexa os itens de cada string
function listaCategoria(tituloCategoria, nomeCategoria) {
    if (nomeCategoria.length > 0) {
        let textoCategoria = `${tituloCategoria}:\n`;
        nomeCategoria.forEach((element, index) => {
            textoCategoria += `${index + 1}. ${element}\n`;
        });

        // Adiciona uma linha em branco entre categorias
        textoCategoria += '\n';
        return textoCategoria;

        // Não imprime lista vazia
    } else {
        return '';
    }
}

// Atualiza a lista com todas as categorias não vazias
function listaTotal() {
    let listaFinal = '';

    listaFinal += listaCategoria('Frutas', frutas);
    listaFinal += listaCategoria('Lacticínios', laticinios);
    listaFinal += listaCategoria('Congelados', congelados);
    listaFinal += listaCategoria('Doces', doces);

    // Remove espaços em branco extras no final
    listaHTML.innerText = listaFinal.trim() + '\n' || 'Sua lista está vazia.\n';
}

function adicionar() {
    nomeCategoria = recebeCategoria(`Qual a categoria que gostaria de adicionar um item:`);

    if (numCategoria === null) {
        return;
    }

    let item = prompt(`Qual o item você gostaria de adicionar à categoria?`);

    // Checa se o item é válido
    if (item) {
        nomeCategoria.push(item);
        listaTotal();
    }


}

function remover() {
    nomeCategoria = recebeCategoria(`Qual a categoria que gostaria de remover um item:`);

    if (numCategoria === null) {
        return;
    }

    while (true) {
        let numItem = prompt(`Qual item gostaria de remover:\n ${listaCategoria('', nomeCategoria)}`);

        if (numItem === null) {
            return;
        }

        if (isNaN(numItem) || numItem <= 0 || numItem > nomeCategoria.length) {
            alert('Desculpe, não entendi.\nTente novamente.');
            continue;
        } else {
            nomeCategoria.splice((numItem - 1), 1);
            listaTotal();
            break;
        }
    }
}


function limpar() {
    frutas = [];
    laticinios = [];
    congelados = [];
    doces = [];
    listaTotal();
}