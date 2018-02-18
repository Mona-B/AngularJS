(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
	$scope.lunch="";
	$scope.LunchClick=function(){
		$scope.mySplit = function() {
    	var array = $scope.lunch.split(',');
    	array=array.filter(Boolean);
    	if(array.length==0){
    		return "Please enter data first";
		}
		else if(array.length<=3){
			return "Enjoy!"
		}
		else{
			return "Too Much!"
		}
	};
};
}	
})();