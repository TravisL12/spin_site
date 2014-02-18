var royoApp = angular.module('royoApp', []);

royoApp.controller('royoController', ['$scope', '$filter', '$sce', function($scope, $filter, $sce) {

  var MANDRILL_API_URL  = "https://mandrillapp.com/api/1.0/messages/send.json";
  // var MAILCHIMP_API_URL = "https://us3.api.mailchimp.com/2.0/lists/subscribe.json";

  $scope.slides = [
  {title: 'Ride 1', src: "public/img/ride_through_oakland.png"},
  {title: 'Ride 2', src: "public/img/just_need_ride.png"}
  ]

  $scope.addPerson = function(email, type) {

    // var chimp_data = {
    //   "apikey": mailchimp_api,
    //   "id": "4610010e8b",
    //   "email": email,
    //   "merge_vars": [],
    //   "email_type": "html",
    //   "double_optin": false,
    //   "update_existing": false,
    //   "replace_interests": false,
    //   "send_welcom": false
    // };

    var mand_data = {
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

      // $.post(MAILCHIMP_API_URL, chimp_data)
      // .success(function(){
      //   console.log('email sent!');
      // })
      // .fail(function(){
      //   console.log('email FAIL!')
      // })

      $.post(MANDRILL_API_URL, mand_data)
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
