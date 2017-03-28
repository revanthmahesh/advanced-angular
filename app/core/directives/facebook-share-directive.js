couponModule.directive('facebookShareDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/facebook-share-template.html',
			controller:'facebookShareController'
        }
});