couponModule.directive('commonDirective', function($rootScope) {
	return {
            restrict: 'E',            
            templateUrl:'app/core/templates/common-template.html',
			controller:'commonController'
        }
});