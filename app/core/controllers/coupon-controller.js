couponModule.controller('couponController', ['$scope', '$rootScope', 'couponConstants', '$timeout', function($scope, $rootScope, couponConstants, $timeout){
	$scope.schema = {};
	var docHeight = $(window).height();
	$scope.editMode = false;
	$scope.showEdit={};
	$rootScope.elementDrop=true;
	$scope.isPreview = false;
	$scope.schema.templateWidth = 100;
	$scope.schema.templateHeight = docHeight;
	$scope.leftPanelHeight = docHeight;
	$scope.schema.templateBorder = 1;
	$scope.dragItem=couponConstants.controls;
	$scope.configFields=couponConstants.config;
	$rootScope.draggedItem = {};
	$scope.in=-1;
	$scope.types=['Coupon','POD','Offer Landing Page','Smart Print','Partner Site'];
	$scope.names=['revanth','peter'];
	$scope.validate={layoutName:'',errorMsg:false,layoutTypes:'',emptyMsg:false};
	$scope.PODsocial=["Enable Facebook","Enable Twitter","Enable Email Sharing","Enable Clip"];
	$scope.Offsocial=["Enable Facebook","Enable Twitter","Enable Email Sharing"];
	$scope.partnersocial=["Enable Facebook","Enable Twitter","Enable Email Newsletter Subscription","Enable Mobile Link","Enable Zipcode Filter","Enable Category Filter","Enable Brand Filter",];

	$scope.offer={"width":10,"height":80,"top":11}
	$scope.partner={"height":50,"top":199}
	$scope.toggle=function(index){
         $scope.toggled=index;
         // $(".nam-cou-con-heading").attr("data-toggle","collapse")
	}
	
		
	if(sessionStorage.getItem('content')){
		$scope.elementContents = JSON.parse(sessionStorage.getItem('content'));
	}else{
		$scope.elementContents = {};
	}
	if(sessionStorage.getItem('data')){
		$scope.schema.controls = JSON.parse(sessionStorage.getItem('data'));
		
		if(!$scope.isPreview){
			$timeout(function(){
				for(var i=0;i<$scope.schema.controls.length;i++){
					if(!$scope.elementContents[$scope.schema.controls[i].type]){
						$('#'+$scope.schema.controls[i].id).css('display', 'none');
					}
					
				}
			});
		}
	}else{
		$scope.schema.controls = [];
	}
		
	$timeout( function(){ 
		var sideBarWidth = angular.element(document.getElementById('sideBar')).prop('offsetWidth');
		var headerBarHeight = angular.element(document.getElementById('headerBar')).prop('offsetHeight');
		$scope.sideBarWidth = sideBarWidth;
		$scope.headerBarHeight = headerBarHeight;
		
	}, 200);

	// $scope.accordin=function(index){
	// 	$scope.col=index;
	// 	if($scope.in===index){
 //          $scope.col=-1;
	// 	}
	// 	$scope.in=index;
	// }
	
	

	 
	 // $( ".cou-drag-ele" ).droppable({
		// 			  accept: ".nam-temp-gridster"
		// 			});

	//$('.nam-com-height').css('min-height', docHeight+'px');
	
	/* $scope.$on('itemChange', function(event, args){
		var index = $(args.$element[0]).attr('cusId');
		$scope.schema.controls[parseInt(index)].top = args.top;
		$scope.schema.controls[parseInt(index)].left = args.left;
	}); */
	//  $scope.$on('itemresized', function(event, args){
	// 	var index = $(args.$element[0]).attr('cusId');
	// 	var width = $('.cou-drop-area').width();
	// 	var elmWw = (($(args.$element[0]).width()/width)*100).toFixed(0);
	// 	$scope.schema.controls[parseInt(index)].height = $(args.$element[0]).height();
	// 	$scope.schema.controls[parseInt(index)].width = elmWw;
	// }); 

	
	$scope.toggleProperty = function(id, type)
	{
	
		$.map(Object.keys($scope.showEdit),function(val)
		{
			if(val!=id)
			{
				 $scope.showEdit[val] = false;
               $scope.editMode = false;
			}
		});
       if($scope.showEdit[id])
		 {
			$scope.editMode = false;
			$scope.showEdit[id] = false;	
		}
		
		else {
            
			$scope.editMode = true;
            $scope.showEdit[id] = true;	
          }
          
	}
//reload page when DISCARD clicked
		$scope.reloadPage=function(){
			  window.location.reload();
			  		}
//save Template based on validation of names in array
	$scope.saveTemplate=function(){
		console.log($scope.validate);
		if($scope.validate.layoutName==""){
			 $scope.validate.emptyMsg=true;
			 $scope.validate.errorMsg=false;
		}
		else if($.inArray($scope.validate.layoutName,$scope.names)>=0){
			$scope.validate.emptyMsg=false;
            $scope.validate.errorMsg=true;

		}else{
			 $("#button_validate").attr("data-dismiss","modal");
			 $scope.validate.errorMsg=false;
			 $scope.validate.emptyMsg=false;
		}

	}

// offerpage and Smart print page draggable controls	
	$scope.OfferSocial=function(checked,$index){
		$scope.offer.isOffer=checked;
		switch ($index) {
			case 0:			
			$scope.offer.left=845;
			$scope.offer.type="facebook";
			break;
			case 1:
			$scope.offer.left=945;
			$scope.offer.type="twitter";
			break;
			case 2:			
			$scope.offer.left=1045;
			$scope.offer.type="email";
			break;
			
		}
		if (checked) {
            $scope.offer.id = Math.floor(Date.now() / 100);
           
            $scope.schema.controls.push(angular.copy($scope.offer));

		}
	  else {
	  	for (var i = $scope.schema.controls.length - 1; i >= 0; i--) {
				if ($scope.schema.controls[i].type===$scope.offer.type ) {
					$scope.index=i;
				}
			}
			$scope.schema.controls.splice($scope.index,1);
	  }
		
		
	}

   
//partner site social dargabble controls
	$scope.PartnersiteSocial=function(checked,$index){
        $scope.partner.isPartner=checked;
        $scope.partner.width=8;
		switch ($index) {
			case 0:
			$scope.partner.left=745;
			$scope.partner.type="facebookLink";
			break;
			case 1:
			$scope.partner.left=845;
			$scope.partner.type="twitterLink";
			break;
			case 2:
			$scope.partner.left=945;
			$scope.partner.type="EmailSubscription";
			break;
			case 3:
			$scope.partner.left=1045;
			$scope.partner.type="MobileLink";
			break;
			case 4:
			$scope.partner.left=45;
			$scope.partner.width=20;
			$scope.partner.type="Zipcode";
			break;
			case 5:
			$scope.partner.left=300;
			$scope.partner.width=15;
			$scope.partner.type="category";
			break;
			
		}
		if (checked) {
			
            $scope.partner.id = Math.floor(Date.now() / 100);
            $scope.schema.controls.push(angular.copy($scope.partner));

		}
	  else {
	  	for (var i = $scope.schema.controls.length - 1; i >= 0; i--) {
				if ($scope.schema.controls[i].type===$scope.partner.type ) {
					$scope.index=i;
				}
			}
			$scope.schema.controls.splice($scope.index,1);
	  }

}

	
//Delete darggable control
	$scope.removeElement = function(index){
		$scope.schema.controls.splice(index, 1);
		$scope.editMode = false;
	}
//save controls JSON into local storage	
	$scope.saveEvent = function(){
		sessionStorage.setItem('data', JSON.stringify($scope.schema.controls));
		sessionStorage.setItem('content', JSON.stringify($scope.elementContents));
		
	}
//clone the control JSON	
	$scope.cloneElement = function(index){
		var obj = angular.copy($scope.schema.controls[index]);
		obj.id = Math.floor(Date.now() / 100);
		obj.top=obj.top+8;
		obj.left=obj.left+45;
		$scope.schema.controls.push(angular.copy(obj));
		
	}


//	
	$scope.$on('saveAndCloseEvent', function(event, args){
		$scope.toggleProperty(args.id, args.type);
	});
	
	

}]);
