// Manipulação de Html

// Exemplo de uso do DOM - interface de programação que representa documentos HTML e XML como uma árvore de objetos. Ele permite que os scripts manipulem a estrutura, o estilo e o conteúdo de uma página da web de maneira dinâmica.


function testeDOM(){
    document.getElementById("titulo").innerText = "Texto alterado";

}

// selecionando elementos

//getElementById() - pega apenas um elemento (único) //variavel simples
let titulo = document.getElementById("titulo");
console.log(titulo);

titulo.style.color = "blue"; //mudando a cor para azul

//getElementsByClassName() - mexe com a classe que pode possuir vários objetos // vetor
let descricao = document.getElementsByClassName("descricao"); //se torna um vetor ou array
console.log("descricao");

descricao[1].style.fontWeight = "bold"; //tornou a fonte do item zero em negrito?
descricao[2].style.color = "green"; //tornou a fonte do item um verde

//getElementsByTag() - vetor
let tituloH3 = document.getElementsByTagName("h3");
tituloH3[0].style.color = "red";

//getElementByName() // vetor

//querySelector - funciona para Tags("tag"); Classes(".class"); Id ("#id") // variável simples 
let primeiroH1 = document.querySelector("h1");
primeiroH1.innerText = "Meu Teste de DOM";

//querySelectorAll // vetor
let todoParagrafos = document.querySelectorAll("p");
todoParagrafos.forEach(x => 
    x.style.fontSize = "18px" // aumenta o tamanho da fonte de todos os parágrafos
);