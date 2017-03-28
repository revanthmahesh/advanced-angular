couponModule.controller('couponPodController', function($scope,$rootScope) {
	//console.log($scope.element);
	$scope.Clipped=function(checked){
		$scope.isClipped=angular.copy(checked);
		
	}
});