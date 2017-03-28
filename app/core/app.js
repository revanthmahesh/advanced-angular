var couponModule = angular.module('couponApp', ['gridster', 'colorpicker.module','ngSanitize','socialshare']);
couponModule.constant('couponConstants', {
	'baseUrl':  window.location.origin +'/',

		"controls":[
						{
						'displayName': 'Coupons',
						'dataTarget': 'Coupons',
						'controls':[
							{width:20,height:122, type:'product', displayName:'Product Image',imageName:'fa-picture-o'},
							{width:20,height:80, type:'discount', displayName:'Discount',imageName:'fa-usd', 'content':'$24',fontSize:12,fontColor:'#000',discount:'$24'},
							{width:20,height:122, type:'pinNumber', displayName:'Pin Number',imageName:'fa-pinterest-square','content':'Pin Number  999999',fontSize:12,fontColor:'#000',fontWeight:'normal',fontStyle:'normal'},
							{width:20,height:122, type:'offerId', displayName:'Offer Id',imageName:'fa-building-o','content':'55555',fontSize:12,fontColor:'#000',fontWeight:'normal',fontStyle:'normal',decoration:'none'},
							{width:20,height:122, type:'offerHeading', displayName:'Offer Heading',imageName:'fa-header','content':"Manufacturer's coupon"},
							{width:20,height:122, type:'offerDescription', displayName:'Offer Description',imageName:'fa-creative-commons','content':'On TWO (2) Celestial Seasoning Get One Free'},
							{width:20,height:188, type:'expiryDate', displayName:'Expiry Date',imageName:'fa-calendar', labePos:'top','content':'12/05/2016',fontSize:12,fontColor:'#000',fontWeight:'normal',fontStyle:'normal'},
							{width:20,height:122, type:'conMsg', displayName:'Consumer Message',imageName:'fa-commenting','content':'One Coupon valid for item(s) indicated.Reproduction,altercation,distribution,sale or transfer of this couponOf course, standard text messaging rates apply to these programs,Of course, standard text messaging rates apply to these programs,Of course, standard text messaging rates apply to these programs,Of course, standard text messaging rates apply to these programs,Of course, standard text messaging rates apply to these programs'},
							{width:20,height:122, type:'barCode', displayName:'Barcode',imageName:'fa-barcode', 'content':'https://endtimestruth.com/wp-content/uploads/2014/07/UPC-A-vs-EAN-13-Barcodes-e1406392413939.jpg'},
							{width:20,height:122, type:'retMsg', displayName:'Retailer Message',imageName:'fa-comments-o','content':'Data rates from your carrier may apply'},
							{width:20,height:122, type:'watermark', displayName:'Watermark',imageName:'fa-font', 'content':'http://static8.bigstockphoto.com/thumbs/1/9/6/small2/6915878.jpg'},
							{width:20,height:122, type:'text', displayName:'Text',imageName:'fa-text-width', 'content':''}
						]
					},
					{
						'displayName': 'POD',
						'dataTarget':'POD',
						'isPODSocial':true,
						'controls':[
							{width:20,height:122, type:'product', displayName:'Product Image',imageName:'fa-picture-o', 'content':'http://freebze.co.uk/wp-content/uploads/2016/06/go-cat.jpg'},
							{width:10,height:80, type:'discount', displayName:'Discount',imageName:'fa-usd', 'content':'$30',fontSize:'12',fontColor:'#000'},
							{width:20,height:122, type:'offerHeading', displayName:'Offer Heading',imageName:'fa-header','content':"Manufacturer's coupon"},
							{width:20,height:122, type:'offerDescription', displayName:'Offer Description',imageName:'fa-creative-commons','content':'On TWO Get One Free'},
							{width:20,height:122, type:'expiryDate', displayName:'Expiry Date',imageName:'fa-calendar', labePos:'top','content':'12/05/2016',fontSize:12,fontColor:'#000',fontWeight:'normal',fontStyle:'normal'},
							{width:20,height:122, type:'text', displayName:'Text',imageName:'fa-text-width', 'content':''}
						]
					},
					{
						'displayName': 'Offer Page',
						'dataTarget': 'OfferPage',
						'isOffSocial':true,
						'controls':[
							{width:20,height:122, type:'product', displayName:'Product Image',imageName:'fa-picture-o', 'content':'https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg'},
							{width:20,height:122, type:'offerHeading', displayName:'Offer Heading',imageName:'fa-header','content':"Generations of Trusted Family Care"},
							{width:20,height:122, type:'offerDescription', displayName:'Offer Description',imageName:'fa-creative-commons','content':'On TWO Get One Free'},
							{width:10,height:80, type:'discount', displayName:'Discount',imageName:'fa-usd', 'content':'$30',fontSize:'12',fontColor:'#000'},
							{width:20,height:122, type:'text', displayName:'Text',imageName:'fa-text-width', 'content':''},
							{width:10,height:80, type:'Button', displayName:'button',imageName:'fa-external-link', 'content':'button'},
							{width:10,height:80, type:'codeBlock', displayName:'Code Block',imageName:' fa-code', 'content':'<p>hello this is code</p>'},
							{width:20,height:122, type:'expiryDate', displayName:'Expiry Date',imageName:'fa-calendar', labePos:'top','content':'12/05/2016',fontSize:12,fontColor:'#000',fontWeight:'normal',fontStyle:'normal'},
							{width:20,height:188, type:'Header', displayName:'Header ',imageName:' fa-table', 'content':['<p>hello this is code</p>','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg','this is a header']},
							{width:20,height:188, type:'Footer', displayName:'Footer',imageName:' fa-table', 'content':['<p>hello this is code</p>','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg','this is a  foooter']},
							{width:10,height:80, type:'container', displayName:'Container',imageName:'fa-square-o', },
						]
					},
					{
						'displayName': 'Smart Print',
						'dataTarget': 'SmartPrint',
						'isOffSocial':true,
						'controls':[
							{width:20,height:122, type:'product', displayName:'Product Image',imageName:'fa-picture-o', 'content':'https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg'},
							{width:20,height:122, type:'offerHeading', displayName:'Offer Heading',imageName:'fa-header','content':"Generations of Trusted Family Care"},
							{width:20,height:122, type:'offerDescription', displayName:'Offer Description',imageName:'fa-creative-commons','content':'On TWO Get One Free'},
							{width:10,height:80, type:'discount', displayName:'Discount',imageName:'fa-usd', 'content':'$30',fontSize:'12',fontColor:'#000'},
							{width:20,height:122, type:'text', displayName:'Text',imageName:'fa-text-width', 'content':''},
							{width:10,height:80, type:'Button', displayName:'button',imageName:'fa-external-link', 'content':'button'},
							{width:10,height:80, type:'codeBlock', displayName:'Code Block',imageName:' fa-code', 'content':'<p>hello this is code</p>'},
							{width:20,height:122, type:'expiryDate', displayName:'Expiry Date',imageName:'fa-calendar', labePos:'top','content':'12/05/2016',fontSize:12,fontColor:'#000',fontWeight:'normal',fontStyle:'normal'},
							{width:20,height:188, type:'Header', displayName:'Header',imageName:' fa-table', 'content':['<p>hello this is code</p>','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/hero_oct_2048x920.jpg','this is a header']},
							{width:20,height:188, type:'Footer', displayName:'Footer',imageName:' fa-table','content':['<p>hello this is code</p>','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg','this is a  foooter']},
							{width:20,height:188, type:'POD', displayName:'POD',imageName:' fa-picture-o', 'content':['$25 Off','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg','One Coupon valid for item(s) indicated.Reproduction,altercation,distribution,sale or transfer of this couponOf course, standard text messaging rates apply to these programs,Of course']},
							{width:20,height:80, type:'totalSaving', displayName:'Total Saving',imageName:'fa-percent', 'content':['Total Saving','$25'],fontSize:'15',fontColor:'#000'},
							{width:10,height:80, type:'container', displayName:'Container',imageName:'fa-square-o', },
						]
					},
					{
						'displayName': 'Partner Site',
						'dataTarget': 'PartnerSite',

						'isPartnerSocial':true,
						'controls':[
							{width:20,height:122, type:'product', displayName:'Product Image',imageName:'fa-picture-o', 'content':'https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg'},
							{width:20,height:122, type:'offerHeading', displayName:'Offer Heading',imageName:'fa-header','content':"Generations of Trusted Family Care"},
							{width:20,height:122, type:'offerDescription', displayName:'Offer Description',imageName:'fa-creative-commons','content':'On TWO Get One Free'},
							{width:10,height:80, type:'discount', displayName:'Discount',imageName:'fa-usd', 'content':'$30',fontSize:'12',fontColor:'#000'},
							{width:20,height:122, type:'text', displayName:'Text',imageName:'fa-text-width', 'content':''},
							{width:10,height:80, type:'Button', displayName:'View More',imageName:'fa-external-link', 'content':'button'},
							{width:10,height:80, type:'codeBlock', displayName:'Code Block',imageName:' fa-code', 'content':'<p>hello this is code</p>'},
							{width:20,height:80, type:'totalSaving', displayName:'Total Saving',imageName:'fa-percent', 'content':['Total Saving','$25'],fontSize:'15',fontColor:'#000'},
						    {width:20,height:188, type:'Header', displayName:'Header',imageName:' fa-table', 'content':['<p>hello this is code</p>','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/hero_oct_2048x920.jpg','this is a header']},
							{width:20,height:188, type:'Footer', displayName:'Footer',imageName:' fa-table', 'content':['<p>hello this is code</p>','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg','this is a  foooter']},
							{width:20,height:188, type:'POD', displayName:'POD',imageName:' fa-picture-o','content':['$25 Off','https://www.healthyessentials.com/sites/healthyessentials/files/styles/he_hero/public/slide-images/desktop-allbrands_hero_12_16_15.jpg','One Coupon valid for item(s) indicated.Reproduction,altercation,distribution,sale or transfer of this couponOf course, standard text messaging rates apply to these programs,Of course']},
							{width:80,height:188, type:'backgroundAdd', displayName:'Background Add',imageName:'fa-list-alt',content:"http://www.smartsource.com/smartsource2/static_content/assets/images/Smartsource_LoginBanners.gif" },
							{width:10,height:80, type:'mediumAdd', displayName:'Medium Add',imageName:'fa-list-alt', },
							{width:60,height:80, type:'seperatorAdd', displayName:'Seperator Add',imageName:'fa-list-alt', },
						]
					},

				],

	'config':{
		'product':{
			'browseImage':true,
			'zindex':true
		},
		'pinNumber':{
			label:true,
			labelPosition:true,
			content:true,
			fontSize:true,
			decoration:true,
			fontWeight:true,
			fontColor:true,
			fontStyle:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true
		},
		'offerId':{
			label:true,
			labelPosition:true,
			content:true,
			fontSize:true,
			fontColor:true,
			fontWeight:true,
			fontStyle:true,
			decoration:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true

		},
		'offerHeading':{
			content:true,
			fontSize:true,
			fontWeight:true,
			fontColor:true,
			fontStyle:true,
			decoration:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true
		},
		'offerDescription':{
			content:true,
			fontSize:true,
			fontColor:true,
			fontWeight:true,
			decoration:true,
			fontStyle:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true
		},
		'discount':{
			content:true,
			fontSize:true,
			fontColor:true,
			fontWeight:true,
			decoration:true,
			fontStyle:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			backgroundColor:true,
			'zindex':true
		},
		'expiryDate':{
			label:true,
			labelPosition:true,
			content:true,
			fontSize:true,
			fontColor:true,
			decoration:true,
			fontWeight:true,
			fontStyle:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true
		},
		'conMsg':{
			content:true,
			'zindex':true
		},
		'barCode':{
			'browseImage':true,
			'zindex':true
		},
		'retMsg':{
			'content':true,
			'zindex':true
		},
		'watermark':{
			content:true,
			fontSize:true,
			fontColor:true,
			fontStyle:true,
			fontWeight:true,
			decoration:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			opacity:true,
			'zindex':true
		},
		'text':{
			content:true,
			fontSize:true,
			fontColor:true,
			fontStyle:true,
			fontWeight:true,
			decoration:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true
		},
		'facebook':{

			'zindex':true
		},
		'twitter':{

			'zindex':true
		},
		'email':{

			'zindex':true
		},
		'Button':{
			content:true,
			'zindex':true
		},
		'codeBlock':{
			content:true,
			'zindex':true
		},
		'POD':{

			'zindex':true
		},
		'Header':{
			backgroundColor:true,
			'zindex':true
		},
		'Footer':{
			backgroundColor:true,
			'zindex':true
		},
		'totalSaving':{
			content:true,
			fontSize:true,
			fontColor:true,
			fontWeight:true,
			decoration:true,
			fontStyle:true,
			border:true,
			borderColor:true,
			borderStyle:true,
			'zindex':true
		},
		'container':{

			border:true,
			borderColor:true,
			borderStyle:true,
			backgroundColor:true,
			'zindex':true
		},
	}
});

couponModule.directive("fileread", [function ($scope) {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                        
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
               // console.log(reader.readAsText(result))
               console.log(reader)
               

            });
            
        }
    }
}]);
