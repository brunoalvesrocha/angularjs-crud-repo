(function() {
    angular
        .module('produtos')
        .controller('ProdutosController', function($scope, MeusProdutos) {
            $scope.titulo = "Meus Produtos";

            $scope.produtos = [];

            var carregarProdutos = function() {
                MeusProdutos.listar().then(function(produtos) {
                    $scope.produtos = produtos;
                });
            };

            $scope.novoProduto = {};
            $scope.criarProduto = function() {
                var produto = {
                    id: Date.now() + "",
                    titulo: $scope.novoProduto.titulo,
                    marca: $scope.novoProduto.marca,
                    valor: $scope.novoProduto.preco,
                    foto: $scope.novoProduto.foto,
                    obs: $scope.novoProduto.obs
                };

                MeusProdutos.inserir(produto).then(carregarProdutos);
                $scope.novoProduto = {};
            }

                $scope.removerProduto = function(id) {
                    MeusProdutos.remover(id).then(carregarProdutos);
            }

            carregarProdutos();
        });
})();