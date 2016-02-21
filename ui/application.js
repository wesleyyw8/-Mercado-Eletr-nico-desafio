var app = angular.module('desafioMercadoEletronicoApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/principal', {
			templateUrl: '../views/principal.html',
			controller: 'PrincipalController'
		}).
		otherwise({
			redirectTo: '/principal'
		});
}]);

app.controller('IndexController', ['$scope','$http','$routeParams', function($scope,$http, routeParams){
	
}]); 

app.controller('PrincipalController', ['$scope','$http','$routeParams', function($scope,$http, routeParams){
	populateProducts();
	function populateProducts(){
		$scope.products = [];
		$scope.products.push({
			name: "Papel Sufite 75g Alcalino 210x297",
			code: "COD03021",
			price: "15.82"
		});
		$scope.products.push({
			name: "Papel Sufite 75g Alcalino 210x297",
			code: "COD58212",
			price: "10.13"
		});
		$scope.products.push({
			name: "Papel Sufite 75g Alcalino 210x297 A4 Chamex Office Ipaper PT 500 Alcalino 210x297 A4 Chamex Office",
			code: "COD09438",
			price: "50.99"
		});
	}
}]); 

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