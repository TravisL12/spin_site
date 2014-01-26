var app = angular.module('royoApp', []);

app.controller('royoController', ['$scope', '$filter', function($scope, $filter) {
  $scope.emailvalid = function(email){
    console.log(email)
  };

}]);
