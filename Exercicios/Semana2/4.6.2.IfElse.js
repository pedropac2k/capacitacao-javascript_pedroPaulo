//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais

const notaCaculo = 6.2;

if (notaCaculo >= 6)
    console.log("Aprovado");
else
    console.log("Reprovado");

if (notaCaculo % 1 !== 0) 
    console.log("Vê uma moedinha ai");
else
    console.log("Vê uma notinha então");