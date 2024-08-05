const areas = {
    front: ['react', 'vue'],
    back: ['c#', 'java']
};

let estudos = prompt('Você gostaria de estudar Front-End ou Back-End?').toLowerCase();

// Loop para definir se estudará Front ou Back-End.
while (true) {
    if (areas.hasOwnProperty(estudos)) {
        break;
    } else {
        estudos = prompt('Descupe, não entendi. Você gostaria de estudar Front-End ou Back-End?').toLowerCase();
    }
}

let linguagem = prompt(`Você gostaria de estudar ${areas[estudos].join(' ou ')}?`).toLowerCase();

// Loop para definir a linguagem
while (true) {
    if (areas[estudos].includes(linguagem)) {
        break;
    } else {
        linguagem = prompt(`Desculpe, não entendi. As opções para ${estudos} são ${areas[estudos].join(' ou ')}.`).toLowerCase();
    }
}

let especialidade = prompt(`Você gostaria de ser especialista em ${linguagem} ou se tornar desenvolvedor Fullstack?`).toLowerCase();

// Loop para definir se será Fullstack ou especilista.
while (true) {
    if (especialidade == linguagem || especialidade == 'especialista') {
        alert(`Continue estudando ${linguagem} para ser um dev ${estudos}-end especialista!`);
        break;
    } else if (especialidade == 'fullstack') {
        alert(`Para se tornar Fullstack, terá que aprender outras linguagens também!`);
        estudos = 'Fullstack'
        break;
    } else {
        especialidade = prompt(`Desculpe, não entendi. Você gostaria de se especialista em ${linguagem} ou se tornar desenvolvedor Fullstack?`).toLowerCase();
    }
}

let listaDeTecnologias = [];
alert(listaDeTecnologias.length);
let tecnologia;

alert(listaDeTecnologias.length);

// Loop para adicionar tecnologias adicionais.
while (tecnologia !== 'encerrar') {
    tecnologia = prompt('Que outra tecnologia você gostaira de conhecer? Responda uma por vez ou "encerrar" para finalizar.');
    if (tecnologia !== 'encerrar') {
        listaDeTecnologias.push(tecnologia);
    }
}

if (listaDeTecnologias.length > 1) {
    alert(`Então você quer estudar ${listaDeTecnologias.join(', ')} além de  ${linguagem}! Que legal`);
} else if (listaDeTecnologias.length === 1) {
    alert(`Boa sorte na sua jornada para dev ${estudos} aprendendo ${listaDeTecnologias[0]}!`);
} else {
    alert(`Você escolheu focar apenas em ${linguagem}!`);
}