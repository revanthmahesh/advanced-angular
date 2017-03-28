couponModule.directive('couponExpiryDateDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-expiry-date-template.html',
			controller:'expiryDateController'
        }
});