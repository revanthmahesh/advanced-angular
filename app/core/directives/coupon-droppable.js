couponModule.directive('droppable', function($rootScope) {
	return {
		restrict: 'A',


		link: function (scope, element, attrs) {
            
		 
			element.droppable({
				
				drop:function(event,ui) {
                      
					 
					if($rootScope.elementDrop){

                    
					
						$rootScope.draggedItem.id = Math.floor(Date.now() / 100);
						$rootScope.draggedItem.left = event.clientX-scope.sideBarWidth;
						$rootScope.draggedItem.top = event.clientY-scope.headerBarHeight;
						
						
						scope.schema.controls.push(angular.copy($rootScope.draggedItem));
						var typeArr = [];
						if(Object.keys(scope.elementContents).length!==0){							
							angular.forEach(scope.elementContents, function(val, key){
								if(key===$rootScope.draggedItem.type){
									typeArr.push(angular.copy(key));
								}
							});
						}else{
							scope.elementContents[$rootScope.draggedItem.type]='';
						}
						if(typeArr.length===0){
							scope.elementContents[$rootScope.draggedItem.type]='';
						}						
						$rootScope.draggeditem = {};
						scope.$apply();
					}else{
						$rootScope.elementDrop=true;
					}
					
				}

			});
		}
	}
});