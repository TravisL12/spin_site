var royoApp = angular.module('royoApp', []);

royoApp.controller('royoController', ['$scope', '$filter', function($scope, $filter) {

  var MANDRILL_API_URL = "https://mandrillapp.com/api/1.0/messages/send.json";

  $scope.cyclist = {type: "Cyclist", placehold: "cyclist@royo.com"}

  $scope.addPerson = function(email, type) {
    var data = {
      "key": "k9bpSuEP5O5asRVySeGc1A",
      "message": {
        "html": "<p>Example HTML content</p>",
        "text": "Example text content",
        "subject": "example subject",
        "from_email": "message.from_email@example.com",
        "from_name": "Example Name",
        "to": [
        {
          "email": "travis.lawrence12@gmail.com",
          "name": "Recipient Name",
          "type": "to"
        }
        ],
        "headers": {
          "Reply-To": "message.reply@example.com"
        }
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
        console.log('email sent!')
      })
      .fail(function(){
        console.log('email FAIL!')
      })
    }
  }


}]);
