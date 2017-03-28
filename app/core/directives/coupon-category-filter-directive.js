couponModule.directive('couponCategoryFilterDirective', function() {
	return {
            restrict: 'EA',
            templateUrl:'app/core/templates/coupon-category-filter-template.html',
			controller:'categoryFilterController'
        }
});