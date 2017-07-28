var app = angular.module('thingThatHaveToBeDone', []);
// This is declaring a module. More on this in a moment
app.controller('myController', function($scope){
$scope.itemsToDo = [];


$scope.addItem = function (){
  $scope.itemsToDo.push($scope.thingToDo);
  $scope.thingToDo= '';
};


});
