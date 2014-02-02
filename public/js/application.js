var royoApp = angular.module('royoApp', []);

royoApp.controller('royoController', ['$scope', '$filter', function($scope, $filter) {

    $scope.cyclist    = {type: "Cyclist", placehold: "cyclist@royo.com"}

    $scope.emailvalid = function(email){
        console.log(email)
    };

}]);
