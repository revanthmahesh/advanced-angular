couponModule.directive('couponWatermarkDirective', function() {
	return {
            restrict: 'EA',            
            templateUrl:'app/core/templates/coupon-watermark-template.html',
			controller:'watermarkController'
        }
});