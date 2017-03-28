couponModule.directive('couponDiscountDirective', function() {
	return {
            restrict: 'EA',            
            templateUrl:'app/core/templates/coupon-discount-template.html',
			controller:'discountController'
        }
});