var app = angular.module('desafioMercadoEletronicoApp',['ngRoute','mgcrea.ngStrap']);

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
	populateSideBar();
	function populateSideBar(){
		/*fa fa-home*/
		$scope.sideBarItems = [];
		$scope.sideBarItems.push({
			icon: 'fa fa-home',
			text: 'Home'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-align-left',
			text: 'Lorem Ipsum'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-usd',
			text: 'Lorem Ipsum'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-shopping-cart',
			text: 'Lorem Ipsum'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-globe',
			text: 'Lorem Ipsum'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-globe',
			text: 'Lorem Ipsum'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-pencil',
			text: 'Lorem Ipsum'
		});
		$scope.sideBarItems.push({
			icon: 'fa fa-question-circle',
			text: 'Lorem Ipsum'
		});
	}
}]); 

app.controller('PrincipalController', ['$scope','$http','$routeParams','$datepicker','$timeout', function($scope,$http, routeParams, $datepicker, $timeout){
	angular.element(".calendar input").datepicker({});
	angular.element(".calendar").datepicker('show');
	
	populateCarousel();
	populateProducts();
	function populateCarousel(){
		$scope.carouselImages = [];
		$scope.carouselImages.push({
			path: "city.jpg",
			isActive: true
		});
		$scope.carouselImages.push({
			path: "tree.jpg",
			isActive: false
		});
		$scope.carouselImages.push({
			path: "night.jpg",
			isActive: false
		});
	}
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