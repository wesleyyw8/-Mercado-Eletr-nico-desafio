app.controller('PrincipalController', ['$scope','$http','$routeParams','$timeout', function($scope,$http, routeParams, $timeout){
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
