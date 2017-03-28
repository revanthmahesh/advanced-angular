couponModule.directive('couponTotalSavingDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/coupon-total-saving-template.html',
			controller:'couponTotalSavingController'
        }
});