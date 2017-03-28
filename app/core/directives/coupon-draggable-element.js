couponModule.directive('draggableElement', ['$rootScope', '$filter', function($rootScope, $filter) {
  return {
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'A',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.draggable({
      	containment: $('.nam-temp-gridster'),
		start:function(event, ui){
			$rootScope.elementDrop=false;
		},
		stop:function(event, ui){
			var index = $(ui.helper[0]).attr('cusid');
			scope.schema.controls[parseInt(index)].top = ui.position.top;
			scope.schema.controls[parseInt(index)].left = ui.position.left;
			scope.$apply();		
		}
      });
    }
  };
}]);