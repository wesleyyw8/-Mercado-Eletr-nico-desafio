angular.module('desafioMercadoEletronicoApp').directive('thumbnail', [ '$timeout',
  function($timeout) {
    return {
        restrict: 'E',
        scope: {
            product : '='
        },
        templateUrl: 'directives/thumbnail/thumbnail.html',
        replace: true,
        link: function($scope, element, attr) {
            
        }
    }
}]);