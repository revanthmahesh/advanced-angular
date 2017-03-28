couponModule.directive('couponPinNumberDirective', function() {
	return {
            restrict: 'EA', 
            templateUrl:'app/core/templates/coupon-pin-number-template.html',
			controller:'pinNumberController'
        }
});