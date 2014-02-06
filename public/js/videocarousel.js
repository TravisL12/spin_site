(function(royoApp){
  royoApp.directive('vidCarousel',function(){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'public/views/videocarousel.html',
      replace: true,
      scope: true,
      controller: function ($scope, $sce) {
        $scope.slides = [
        {title: 'Youtube 1', src: $sce.trustAsResourceUrl('http://www.youtube.com/embed/SPhcOskjsDs?showinfo=0&autohide=1&modestbranding=1')},
        {title: 'Youtube 2', src: $sce.trustAsResourceUrl('http://www.youtube.com/embed/SPhcOskjsDs?showinfo=0&autohide=1&modestbranding=1')},
        {title: 'Youtube 3', src: $sce.trustAsResourceUrl('http://www.youtube.com/embed/SPhcOskjsDs?showinfo=0&autohide=1&modestbranding=1')},
        {title: 'Youtube 4', src: $sce.trustAsResourceUrl('http://www.youtube.com/embed/SPhcOskjsDs?showinfo=0&autohide=1&modestbranding=1')},
        {title: 'Youtube 5', src: $sce.trustAsResourceUrl('http://www.youtube.com/embed/SPhcOskjsDs?showinfo=0&autohide=1&modestbranding=1')}
        ]
      }

    }
  });
})(angular.module('royoApp'));
