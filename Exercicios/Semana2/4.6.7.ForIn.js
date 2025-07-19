//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota
let materias = ["Cálculo", "POO", "Arquitetura de Computadores", "Engenharia de Software II"];
const Semestre = {
    calculo: 6.0,
    poo: 8.5,
    arquiteturaDeComputadores: 5.2,
    engenhariaDeSoftware2: 7.3
}
console.log("Matérias do semestre: ");

for (let i = 0; i < materias.length; i++) {
    console.log(`${materias[i]}`);
}

console.log("\nAproveitamento do semestre: ");

for (let materia in Semestre){
    console.log(`Matéria: ${materia}, Nota: ${Semestre[materia]}`);
    console.log(Semestre[materia] >= 6 ? 'Parabéns, você foi aprovado em' + mateira : 'Infelizmente você foi reprovado em.' + materia + '\n');
}
