couponModule.directive('draggable', ['$rootScope', '$filter', function($rootScope, $filter) {
  return {
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'A',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.draggable({

      	  // containment: $('.nam-cou-left-panel, .cou-drop-area'),
      	 // containment:$('.nam-drop'), 
        revert:true,
		helper:'clone',
      
		start:function(event, ui){
			var type = $(event.currentTarget).attr('item-type');
			var displayName=$(event.currentTarget).attr('display-type');
			angular.forEach(scope.dragItem, function(parVal, parKey){
				
			if(parVal.displayName===displayName){
				angular.forEach(parVal.controls, function(val, key){
					if(val.type===type ){
						$rootScope.draggedItem = angular.copy(val);
					}
				});
				};
			});
		}

      });

    }
  };
}]);