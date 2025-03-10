// Lista de Tarefas (ToDoList)

// dispara o evento

document.getElementById("btnAdicionar").addEventListener("click", criarTarefa);// criando um ouvinte - fica atento a algum evento, no caso um evento do tipo click, quuando ele ver esse evento acontecer vai executar uma ação

function criarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim();//remove os espaços antes e depois do texto
    //verificar se a tarefa não está vazia
    if (texto==="") {
        return;
    }
    // se não vazio
    let li = document.createElement("li")//criando um item chamado LI
    li.innerHTML = texto+'<button onclick="removerTarefa(this)">Remover</button>';
    //adicionar o LI  na ul(lista)
    let ul = document.getElementById("lista");//pega a lista
    ul.appendChild(li);//adiciona o li na ul

    input.value = "" //limpa o campo do input
}

function removerTarefa(botao){
    botao.parentElement.remove()
}

//mudar cor do fundo - terminar
document.getElementById("mudarCor").addEventListener("click", function() {
    let cores = ["red", "blue", "green", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});

