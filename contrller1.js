(function(angular){
	var atelic = angular.module('atelic', []);
	atelic.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/atelic',{
			templateUrl:'atelic/view.html',
			controller:'atelicController'
		})
		
	}])
	atelic.controller('atelicController', ['$scope', function($scope){
		$scope.text = '很抱歉，码字中'
	}])


})(angular);