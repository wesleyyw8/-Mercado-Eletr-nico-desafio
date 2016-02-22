app.controller('LoginController',
['$scope','$http','$routeParams','toaster','$location', function($scope,$http,
routeParams,toaster,location){

	var emailRegex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	//at least 1 letter, at least 1 number, 3 to 13 characters and 1 special char
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{3,13}$/;

	$scope.user ={
		email: "",
		newPassword: "",
		confirmNewPassword: "",
		password: ""
	};

	$scope.savePassword = function(){
		if (checkValidFields())
			location.path("/principal");
	};
	function toasterMessage(msg){
		toaster.pop({type: 'error', "title": msg});
	}
	function checkValidFields(){
		if (!emailRegex.test($scope.user.email)){
			toasterMessage('O campo email deve conter um email valido');
			return false;
		}
		else if ($scope.user.password.length < 1){
			toasterMessage("Preencha o campo senha");
			return false;
		}
		else if (!passwordRegex.test($scope.user.newPassword)){
			toasterMessage("O campo nova senha deve conter pelo menos:"+
						"Uma letra;"+
						"Um número;"+
						"Um caractere especial;"+
						"Mais que 3 caracteres e menos que 13 caracteres");
			return false;
		}
		else if ($scope.user.newPassword != $scope.user.confirmNewPassword){
			toasterMessage('O campo confirme a nova senha deve conter a mesma senha que o campo nova senha');
			return false;
		}
		return true;
	};
}]);