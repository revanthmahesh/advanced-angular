couponModule.controller('socialNetworkController', function($scope,$rootScope) {
	//console.log($scope.element);
	$rootScope.Social=function(check,$index){
		switch ($index) {
			case 0:
			$rootScope.isFacebook=check;
			break;
			case 1:
			$rootScope.isTwitter=check;
			break;
			case 2:
			$rootScope.isEmail=check;
			break;
			case 3:
			$rootScope.isClip=check;
			break;
		}
	}
	
	$scope.Clipped=function(checked){
		$scope.isClipped=checked;
		
	}
});