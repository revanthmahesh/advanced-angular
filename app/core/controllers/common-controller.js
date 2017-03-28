couponModule.controller('commonController',function($scope) {
	$scope.saveEvent = function(id, type){
		var obj = {
			id:id,
			type:type
		}
		$scope.$emit('saveAndCloseEvent', obj);
	}
	
	$scope.changeLabelEvent = function(item, val){
		var label;
		if(val==='top' || val==='bottom'){
			label = $('#'+item.id+' '+'.cou-label-content .label');
			$('#'+item.id+' '+'.cou-label-content .label').remove();			
			if(val==='bottom'){				
				$('#'+item.id+' '+'.cou-label-content').append(label);
			}else{
				$('#'+item.id+' '+'.cou-label-content').prepend(label);
			}
			$('#'+item.id+' '+'.cou-label-content .label').css('display', 'block');
		}else{
			label = $('#'+item.id+' '+'.cou-label-content .label');
			$('#'+item.id+' '+'.cou-label-content .label').remove();			
			if(val==='right'){				
				$('#'+item.id+' '+'.cou-label-content').append(label);
			}else{
				$('#'+item.id+' '+'.cou-label-content').prepend(label);
			}
			$('#'+item.id+' '+'.cou-label-content .label').css('display', 'inline-block');
		}
	}
});