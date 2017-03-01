'use strict';

var mainObjtt = [];

var app = angular.module('app', []);

app.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data|chrome-extension):/);        
    }
]);

app.controller('indexCtrl', ['$scope', '$http',  function ($scope, $http) {
	
	var mainObj = {};	
	var postObj = {};	
	$scope.postObj = {};

var getObject = function(mainObj, ind){
		
		
};



$scope.registration = function () {	
	
	console.log($scope.postObj);
	console.log($scope.postObj.sex);
	
	postObj = $scope.postObj;

	$http.post('/postall', postObj).then(function successCallback(response){	
	console.log(response.data);

	});	
	 
	//document.location.reload();

};  




	$http.get('/getall').then(function successCallback(response){
		
		//console.log(mainObj);
	}); 


	

//END OF MAIN PROGRAM


}]);  // END OF CONTROLLER

//document.getElementById("inter").disabled = true;


