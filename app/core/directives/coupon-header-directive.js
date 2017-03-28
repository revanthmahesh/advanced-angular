couponModule.directive('couponHeaderDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/coupon-header-template.html',
			controller:'couponHeaderController'
        }
});