couponModule.directive('couponRetailerMessageDirective', function() {
	return {
            restrict: 'EA',            
            templateUrl:'app/core/templates/coupon-retailer-message-template.html',
			controller:'retailerMessageController'
        }
});