couponModule.directive('couponFacebookLinkDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-facebook-link-template.html',
			controller:'FacebookLinkController'
        }
});