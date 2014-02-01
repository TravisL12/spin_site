(function(royoApp){
  royoApp.directive('creativeCommons',function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'public/views/creativecommons.html',
      replace: true,
      scope: true,
      link: function () {
        // body...
      }

    }
  });
})(angular.module('royoApp'));
