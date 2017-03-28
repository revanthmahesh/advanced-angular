couponModule.directive('couponButtonDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/coupon-button-template.html',
			controller:'couponButtonController'
        }
});