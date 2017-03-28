couponModule.directive('couponBarcodeDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-barcode-template.html',
			controller:'barcodeController'
        }
});