//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente
const materias = ["Cálculo", "POO", "Arquitetura de Computadores", "Engenharia de Software II"];
const notas = [6.0, 8.5, 6.2, 7.3];

let media = 0;

for (let i=0; i < notas.length; i++){
    media += notas[i];
    console.log(`Matéria: ${materias[i]}, Nota: ${notas[i]}`);
}

media /= notas.length;

console.log(`\nA média das notas é: ${media.toFixed(2)}`);

