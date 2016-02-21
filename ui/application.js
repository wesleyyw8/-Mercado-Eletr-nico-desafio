var app = angular.module('desafioMercadoEletronicoApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/principal', {
			templateUrl: '../views/principal.html',
			controller: 'PrincipalController'
		}).
		when('/login', {
			templateUrl: '../views/login.html',
			controller: 'LoginController'
		}).
		otherwise({
			redirectTo: '/login'
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

app.controller('LoginController', ['$scope','$http','$routeParams', function($scope,$http, routeParams){

	var emailRegex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	//at least 1 letter, at least 1 number, 3 to 13 characters and 1 special char
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{3,13}$/;

	$scope.savePassword = function(){
		checkValidFields();
	};
	function checkValidFields(){
		if (!emailRegex.test($scope.user.email))
			alert('O campo email deve conter um email valido');
		
		if (!passwordRegex.test($scope.user.newPassword))
			console.log("O campo nova senha deve conter pelo menos:"+
						"Uma letra;"+
						"Um número;"+
						"Um caractere especial;"+
						"Mais que 3 caracteres e menos que 13 caracteres");

		if ($scope.user.newPassword != $scope.user.confirmNewPassword)
			console.log('O campo confirme a nova senha deve conter a mesma senha que o campo nova senha');
	};
}]);
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