// FUnções de Data e Hora
let agora = new Date(); //(new - instanciando um objeto da classe Date)
console.log(agora);
console.log(agora.toLocaleDateString());

//Funções get - pego informações
//Funções set - altera as informações

//Funções TO (Imprimir) - Transforma em texto

//Manipulação de Datas
let data1 = new Date();
let data2 = new Date("2025-12-31"); //Exibir do jeito americano

let diferenca = data2-data1; //milisegunds

console.log(diferenca/(1000*60*60*24));

