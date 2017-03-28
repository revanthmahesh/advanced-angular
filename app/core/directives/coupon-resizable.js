couponModule.directive('resizable', ['$rootScope', '$filter', function($rootScope, $filter) {
  return {
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'A',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.resizable({
      	containment: $('.nam-temp-gridster'),
		start:function(event, ui){
			//console.log(event)
			
		},
		stop:function(event, ui){
			var index = $(ui.element).attr('cusid');
			var width = $('.cou-drop-area').width();
			var elmWw = (ui.size.width/width*100).toFixed(0);
			scope.schema.controls[parseInt(index)].height = ui.size.height;
			scope.schema.controls[parseInt(index)].width = elmWw;
			scope.$apply();
		}
      });
    }
  };
}]);