//criar as classe

class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    constructor(id, cliente, itens, desconto) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens; // Array de produtos
        this.desconto = desconto; // Desconto em porcentagem
        this.toral = this.calcularTotal()
    }
    
    calcularTotal() {
        let total = this.itens.reduce((acc, item) => 
            acc + (item.produto.preco * item.quantidade),0);
        return total - (total * (this.desconto / 100));
    }
}

class SistemaPedidos {
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }

    cadastrarCliente() {
        const nome = document.getElementById("clienteNome").value;
        if (!nome) return alert("DIgite um Nome para o cliente");
        const cliente = new Cliente(this.clientes.length + 1, nome);
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.nome} cadastrado com sucesso!`);        
        }
    

    cadastrarProduto() {
        const nome = document.getElementById("produtoNome").value;
        const preco = parseFloat(document.getElementById("produtoPreco").value);
        if (!nome || !preco) return alert("Preencha todos os campos corretamente!");
        const produto = new Produto(this.produtos.length + 1, nome, preco);
        this.produtos.push(produto);
        console.log(`Produto ${produto.nome} cadastrado com sucesso!`);       
        }
    
    atualizarClientes() {
        const list = document.getElementById("listaClientes");
        list.innerHTML = ""; // Limpa a lista antes de atualizar
        
        const selectClientes = document.getElementById("selectCliente");
        selectClientes.innerHTML = 
        `<option value = ""> Selecione um Cliente</option>`; // Limpa o select antes de atualizar
        this.clientes.forEach(cliente => {
            const li = document.createElement("li");
            li.innerText - cliente.nome;
        });
    }}