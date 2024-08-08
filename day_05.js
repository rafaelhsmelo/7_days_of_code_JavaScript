let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function adicionar() {

    while (true) {
        let numCategoria = parseInt(prompt('Qual a categoria que gostaria de adicionar:\n 1) Frutas\n 2) Lacticínios\n 3) Congelados\n 4) Doces\n\n Difite apenas o número.'));
        let nomeCategoria;
        switch (numCategoria) {
            case 1:
                nomeCategoria = 'Frutas'
                break;
            case 2:
                nomeCategoria = 'Laticínios'
                break;
            case 3:
                nomeCategoria = 'Congelados'
                break;
            case 4:
                nomeCategoria = 'Doces'
                break;

            default:
                alert('Desculpe, não entendi. Tente novamente.');
                continue;
        }
        break;
    }
}