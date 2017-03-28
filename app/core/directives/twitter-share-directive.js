couponModule.directive('twitterShareDirective', function() {
	return {
            restrict: 'EA',  
            templateUrl:'app/core/templates/twitter-share-template.html',
			controller:'twitterShareController'
        }
});