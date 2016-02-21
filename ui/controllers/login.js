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