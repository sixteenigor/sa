'use strict';

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
	var loginObj = {};	
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

$scope.login = function() {

	loginObj.password = $scope.postObj.password;
	loginObj.email = $scope.postObj.email;
	console.log(loginObj);

	$http.post('/login', loginObj).then(function successCallback(response){
		
		console.log(response.data);
		alert(response.data);


	}); 
};


$http.get('/getall').then(function successCallback(response){
		console.log(response.data[0]);
		//console.log(mainObj);
	}); 	


	

//END OF MAIN PROGRAM


}]);  // END OF CONTROLLER

//document.getElementById("inter").disabled = true;