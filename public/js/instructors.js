(function(royoApp){
  royoApp.directive('instructors',function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'public/views/instructors.html',
      replace: true,
      scope: true,
      link: function () {
        // body...
      }

    }
  });
})(angular.module('royoApp'));
