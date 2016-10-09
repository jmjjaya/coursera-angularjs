(function () {
  'use strict';
angular.module('myFirstApp', [])
.controller('myFirstController', function ($scope) {
  $scope.name = "ජීවන්";
  $scope.sayHello = function () {
    return "ආයූබෝවන්"
  }
}) ;
})();
