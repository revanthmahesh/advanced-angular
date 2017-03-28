couponModule.directive('couponTextDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-text-template.html',
			controller:'textController'
        }
});