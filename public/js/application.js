var royoApp = angular.module('royoApp', ['firebase']);

royoApp.controller('royoController', ['$scope', '$filter', '$firebase', function($scope, $filter, $firebase) {
  var peopleRef = new Firebase("https://travislawrence.firebaseio.com/royo");
  $scope.cyclist    = {type: "Cyclist", placehold: "cyclist@royo.com"}

  $scope.people = $firebase(peopleRef);
  $scope.addPerson = function(email, type) {
    if(!email || !type){
      if(!email){
        console.log('email missing!')
      };
      if(!type) {
        console.log('type missing!')
      };
      return;
    }else{
      $scope.people.$add({email: $scope.rider.email, type: $scope.rider.type});
      $scope.newPerson = "";
    }
  }
}]);
