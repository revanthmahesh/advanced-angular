couponModule.directive('couponConsumerMessageDirective', function() {
	return {
            restrict: 'EA',            
            templateUrl:'app/core/templates/coupon-consumer-message-template.html',
			controller:'consumerMessageController'
        }
});