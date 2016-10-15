(function () {
  'use strict';

  var ngLuchChecker = angular.module('lunchchecker',[]);
  var ctrLunchChecker = ngLuchChecker.controller('CTRLuchChecker', funLuchChecker);

  funLuchChecker.$inject = ['$scope'];

  function funLuchChecker($scope) {
    $scope.foodlist = "";
    $scope.checkFoodList = function () {
        if ($scope.foodlist.length != 0){
          $scope.foodlistarray = $scope.foodlist.split(',');
          if ($scope.foodlistarray.length <= 3) {
            $scope.message = 'Enjoy';
          }
          else if ($scope.foodlistarray.length > 3) {
              $scope.message = 'Too much!';
          }
       }
       else {
         $scope.message = 'Please enter data first';
      }
    }
  }
})();
