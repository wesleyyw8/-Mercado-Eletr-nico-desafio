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
