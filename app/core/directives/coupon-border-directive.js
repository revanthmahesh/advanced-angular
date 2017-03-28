couponModule.directive('couponBorderDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/coupon-border-template.html',
			controller:'borderController'
        }
});