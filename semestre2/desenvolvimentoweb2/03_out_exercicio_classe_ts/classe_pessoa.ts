interface IProduto {
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;
}

class CarrinhoDeCompras {
    private produtos: IProduto[] = []

    public adicionarProduto(listaProdutos: IProduto[]) {
        listaProdutos.forEach((x: IProduto) => {
            this.produtos.push(x)
        })
    }

    public calcularTotal(){
        let total: number = 0
        this.produtos.forEach((x:IProduto)=>{
            total = total + x.preco
        })
        return total
    }
}

const produto1: IProduto = {
    nome: 'Teclado',
    preco: 200,
    quantidadeEmEstoque: 20
}

const produto2: IProduto = {
    nome: 'Mouse',
    preco: 120,
    quantidadeEmEstoque: 50
}

let carrinho = new CarrinhoDeCompras
carrinho.adicionarProduto([produto1,produto2])
console.log(carrinho.calcularTotal())