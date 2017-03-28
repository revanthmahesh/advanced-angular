couponModule.directive('couponZipcodeFilterDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-zipcode-filter-template.html',
			controller:'CouponZipcodeController'
        }
});