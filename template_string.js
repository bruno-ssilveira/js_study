//console.log("deu erro");
//console.error(new Error("deu erro"));


const nome = 'bruno';
const idade = 23;
const cidadeDeNascimento = 'Porto Alegre';

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

// console.log(apresentacao);

// Operador ternário

const bebidaMaior = 'cerveja';
const bebidaMenor = 'suco';

const pedido = `${nome} diz: por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}!`;

console.log(pedido)