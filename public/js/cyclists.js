(function(royoApp){
  royoApp.directive('cyclists',function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'public/views/cyclists.html',
      replace: true,
      scope: true,

      link: function () {
        // body...
      }

    }
  });
})(angular.module('royoApp'));
