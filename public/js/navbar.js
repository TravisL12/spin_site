(function(royoApp){
  royoApp.directive('navbar',function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'public/views/navbar.html',
      replace: true,
      scope: true,
      link: function () {
        // body...
      }

    }
  });
})(angular.module('royoApp'));
