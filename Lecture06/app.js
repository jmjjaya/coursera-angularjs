( function () {
  'use strict';
  var nameangular = angular.module('nameNumericValue', []);

  nameangular.controller('nameController', function ($scope) {
    $scope.value = 0;
    $scope.name = "";
    $scope.displyValue = function () {
    $scope.value = 0;
      for (var i = 0; i < $scope.name.length; i++) {
        $scope.value += $scope.name.charCodeAt(i);
    };
    }
  });
})();
