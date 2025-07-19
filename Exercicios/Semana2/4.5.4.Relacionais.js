//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.
const Pessoa1 = {
    nome: "João",
    idade: 5,
    altura: 0.8
}

const Pessoa2 = {
    nome: "Mariana",
    idade: 22,
    altura: 1.75
}

if (Pessoa1.idade == Pessoa2.idade)
    console.log(`${Pessoa1.nome} e ${Pessoa2.nome} possuem a mesma altura.`)
else if(Pessoa1.idade > Pessoa2.idade)
    console.log(`${Pessoa1.nome} é mais velho que ${Pessoa2.nome}.`)
else
    console.log(`${Pessoa1.nome} é mais novo que ${Pessoa2.nome}.`)

if (Pessoa1.altura == Pessoa2.altura)
    console.log(`${Pessoa1.nome} e ${Pessoa2.nome} possuem a mesma altura.`)   
else if(Pessoa1.altura > Pessoa2.altura)
    console.log(`${Pessoa1.nome} é mais alta que ${Pessoa2.nome}.`)
else
    console.log(`${Pessoa1.nome} é mais baixo que ${Pessoa2.nome}.`)

if (Pessoa1.nome == Pessoa2.nome)
    console.log(`${Pessoa1.nome} e ${Pessoa2.nome} possuem o mesmo nome.`) 
else
    console.log(`${Pessoa1.nome} e ${Pessoa2.nome} possuem nomes diferentes.`)