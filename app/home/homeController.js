export default ngModule => {
    ngModule.controller('HomeController', ['$scope', ($scope)=>{
	    $scope.title = 'This is home';

	    $scope.pets = [
	        {name: 'Ellie'},
	        {name: 'Mr. Fish'},
	        {name: 'Stella'},
	        {name: 'Stuby'}
	    ];
	}]);
}