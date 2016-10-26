angular.module("produtos").directive("awProduto", function () {
    return {
        restrict: "A",
        scope: {
            filme: '=awProduto',
            fnFechar: '&'
        },
        //templateUrl: "templates/produto.template.html",
        link: function (scope, element, attr) {
            element.addClass('produto com-imagem');

            if (!attr.fnFechar) {
                element.find('button').remove();
            }
        }
    };
})