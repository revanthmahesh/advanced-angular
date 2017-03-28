couponModule.directive('couponEmailNewsSubscriptionDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-email-news-subscription-template.html',
			controller:'EmailNewsSubscriptionController'
        }
});