var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (listaProdutos) {
        var _this = this;
        listaProdutos.forEach(function (x) {
            _this.produtos.push(x);
        });
    };
    CarrinhoDeCompras.prototype.calcularTotal = function () {
        var total = 0;
        this.produtos.forEach(function (x) {
            total = total + x.preco;
        });
        return total;
    };
    return CarrinhoDeCompras;
}());
var produto1 = {
    nome: 'Teclado',
    preco: 200,
    quantidadeEmEstoque: 20
};
var produto2 = {
    nome: 'Mouse',
    preco: 120,
    quantidadeEmEstoque: 50
};
var carrinho = new CarrinhoDeCompras;
carrinho.adicionarProduto([produto1, produto2]);
console.log(carrinho.calcularTotal());
