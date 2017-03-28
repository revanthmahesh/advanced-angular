couponModule.directive('couponProductDirective', function() {
	return {
            restrict: 'EA',            
            templateUrl:'app/core/templates/coupon-product-template.html',
			controller:'productController'
        }
});