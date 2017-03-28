couponModule.directive('couponCodeBlockDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/coupon-codeblock-template.html',
			controller:'couponCodeBlockController'
        }
});