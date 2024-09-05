// Mandar mensagem pro console
console.log("Ola mundo!");

// Variaveis const e let
const PI = 3.14; //decimal
let idade = 5; //inteiro
let nome = "João"; //texto
let mae = 'Maria'; //texto
let estudante = false; //booleano
let dirige = true;//booleano
let sobrenome; //undefined

console.log(PI);
console.log(idade);
console.log(typeof PI);

// Operacoes
let a = 10;
let b = 2;
// Soma
console.log(a + b);
// Subtracao
console.log(a - b);
// Multiplicação
console.log(a * b);
// Divisao
console.log(a / b);
// Resto ou mod
console.log(a % b);

// Comparacoes ou teste logico
let c = '10';
// valor igual == igualdade
console.log(a == c);
// valor e tipo igual === igualdade estrita
console.log(a === c);
// Maior
console.log(a > b);
// Menor
console.log(a < b);
// Maior ou igual
console.log(a >= b);
// Menor ou igual
console.log(a <= b);
// Diferente
console.log(a != b)
console.log(a !== c)

// Condicionais
let nota = 3;
let media = 6;
let recuperacao = 5;

if (nota >= media) {
    console.log('Aluno aprovado!');
} else {
    console.log('Aluno Reprovado!')
}

// estuda = aluno.matriculado ? "Sim" : "Não"
res = nota >= media ? 'Aprovado' : 'Reprovado'
console.log(res)

if (media >= nota) {
    console.log("Aprovado")
} else if (media >= recuperacao) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

let diaDaSemana = 7
switch (diaDaSemana) {
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    default:
        console.log('Outro dia');
}
// laços de repetição
let contador = 0
// Enquanto meu teste for verdadeiro faça
while (contador <= 10) {
    console.log(contador);
    contador++; // incrementar:contardo = contador + 1;
}

let tentativa = 0;
// EOF - end of file

while (tentativa < 5) {
    // await
    console.log("Tentativa: " + tentativa)
    tentativa++;
}

// Quando eu ja sei o tamanho
let target = 5;
let incrementar = 0;
let decrementar = 0;
for (let i = 0; i <= target; i++) {
    console.log("Passo: " + i);
    console.log(incrementar++);
    console.log(decrementar--);
}

// array coleção de dados
let numeros = [10, 20, 30, 40, 50, 60];

// foreach
numeros.forEach(function (numero) {
    console.log(numero);
})
// for(numero in numeros)
// foreach(numeros as numero)
numeros.forEach(n =>{console.log(n)})
// Texto 'aspas simples' e "aspas duplas"
// e entre `crases`
let frutas  =['abacaxi', 'manga','uva','jabuticaba']
frutas.forEach(f =>{console.log(f)})
// Exemplo com crase
frutas.forEach((f,i) =>{ 
console.log(`${i} : ${f}`)
})

let tamanho = frutas.length
console.log("Tamanho do array: "+tamanho)
frutas[0] = "Gabiroba"
console.log("Item: "+ frutas[0])

frutas.push("Pitanga")
console.log(frutas)
frutas.pop()
console.log(frutas)
// Excluir um item de um array
let filtro = frutas.filter( fruta => fruta !== "uva")
console.log(filtro)
// Primeiro e o indice do array, o segundo qtde
let porIndice = frutas.splice(2,3)
console.log(porIndice)

// Exemplo Json ou dicionario
let dicionario = {
    nome: "Joao",
    idade: "25",
    cidade: "Senges"
}
let json = {
    "nome": "Joao",
    "idade": "25",
    "cidade": "Senges"
}
console.log(dicionario.nome, json.nome)