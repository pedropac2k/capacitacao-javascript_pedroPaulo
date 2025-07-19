//Faça uma estrutura de switch para dado o código da sua matéria desse semestre
//ela irá imprimir no console o nome completo da materia
/*CRSC03	ARQUITETURA DE COMPUTADORES
MAT00A	CÁLCULO A
SDES05	ENGENHARIA DE SOFTWARE II
XDES02	PROGRAMAÇÃO ORIENTADA A OBJETOS */
const prompt = require('prompt-sync')({ sigint: true });

const dicMaterias = {
    'MAT00A': 'CÁLCULO A',
    'CRSC03': 'ARQUITETURA DE COMPUTADORES',
    'SDES05': 'ENGENHARIA DE SOFTWARE II',
    'XDES02': 'PROGRAMAÇÃO ORIENTADA A OBJETOS'
};

materia = prompt("Digite o código da sua matéria:");

switch (materia){
    case 'MAT00A':
        console.log(`Matéria correspondente: ${dicMaterias['MAT00A']}`);
        break;
    case 'CRSC03':
        console.log(`Matéria correspondente: ${dicMaterias['CRSC03']}`);
        break;
    case 'SDES05':
        console.log(`Matéria correspondente: ${dicMaterias['SDES05']}`);
        break;
    case 'XDES02':
        console.log(`Matéria correspondente: ${dicMaterias['XDES02']}`);
        break;
    default:
        console.log("Código de matéria inválido.");
        break;
}