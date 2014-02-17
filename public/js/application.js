var royoApp = angular.module('royoApp', []);

royoApp.controller('royoController', ['$scope', '$filter', '$sce', function($scope, $filter, $sce) {

  var MANDRILL_API_URL  = "https://mandrillapp.com/api/1.0/messages/send.json";

  $scope.slides = [
  {title: 'Ride 1', src: "public/img/ride_through_oakland.png"},
  {title: 'Ride 2', src: "public/img/just_need_ride.png"}
  ]

  $scope.addPerson = function(email, type) {
    var data = {
      "key": "k9bpSuEP5O5asRVySeGc1A",
      "message": {
        "html": "<p>Welcome Royo Rider type: " + type + "</p>",
        "text": "Example text content",
        "subject": type + " Rider",
        "from_email": "DoNotReply@royorides.com",
        "from_name": "Royo Rides",
        "to": [
        {
          "email": email,
          "type": "to"
        }
        ]
      },
      "async": false,
      "ip_pool": "Main Pool"
    };

    if(!email || !type){
      if(!email){ console.log('email missing!') };
      if(!type) { console.log('type missing!') };
      return;
    }else{
      $.post(MANDRILL_API_URL, data)
      .success(function(){
        console.log('email sent!');
        $scope.email_success = true;
        $scope.$apply();
      })
      .fail(function(){
        console.log('email FAIL!')
      })
    }
  }


}]);
