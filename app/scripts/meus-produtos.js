angular.module("produtos").factory("MeusProdutos", function ($q, $http) {
   return {
       listar: function () {
           var promessa = $q.defer();

           $http.get("https://produtos-6f2ae.firebaseio.com/produtos.json").then(
               function(result) {
                   var produtos = [];
                   angular.forEach(result.data, function(produto, id) {
                       produto.id = id;
                       produtos.push(produto);
                   });
                   promessa.resolve(produtos);
           });

           return promessa.promise;
       },
       inserir: function(produto) {
           var id = produto.id;
           delete produto.id;

           return $http.put("https://produtos-6f2ae.firebaseio.com/produtos/" + id + ".json", produto);
       },
       remover: function (id) {
           return $http.delete("https://produtos-6f2ae.firebaseio.com/produtos/" + id + ".json");
       }
   }; 
});