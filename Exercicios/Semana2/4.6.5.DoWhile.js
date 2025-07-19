//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

// Importa a biblioteca prompt-sync para pegar entrada do usuário no terminal
// Certifique-se de ter instalado: npm install prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

console.log("--- Bem-vindo ao Jogo de Adivinhação de Números! ---");
console.log("Digite um número entre 1 a 100.");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativaDoUsuario; 
let numeroDeTentativas = 0;

do {
    numeroDeTentativas++;

    
    const entrada = prompt(`Tentativa #${numeroDeTentativas}: Qual é o seu palpite? `);

    tentativaDoUsuario = parseInt(entrada);

    if (isNaN(tentativaDoUsuario)) {
        console.log("Isso não é um número válido! Por favor, digite um número.");
    } else if (tentativaDoUsuario < 1 || tentativaDoUsuario > 100) {
        console.log("O número deve estar entre 1 e 100. Tente novamente.");
    } else {
        if (tentativaDoUsuario < numeroSecreto) {
            console.log("Muito baixo! Tente um número maior.");
        } else if (tentativaDoUsuario > numeroSecreto) {
            console.log("Muito alto! Tente um número menor.");
        }
    }

} while (tentativaDoUsuario !== numeroSecreto); 

console.log(`\nParabéns! Você acertou o número secreto ${numeroSecreto} em ${numeroDeTentativas} tentativa(s)!`);
console.log("--- Jogo Encerrado ---");