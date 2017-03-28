couponModule.directive('emailShareDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/email-share-template.html',
			controller:'emailShareController'
        }
});