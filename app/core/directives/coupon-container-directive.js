couponModule.directive('couponContainerDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-container-template.html',
			controller:'couponContainerController'
        }
});