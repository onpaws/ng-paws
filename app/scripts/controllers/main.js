'use strict';

/**
 * @ngdoc function
 * @name ngPawsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngPawsApp
 */
angular.module('ngPawsApp')
  .controller('MainCtrl', function () {

  })
  .controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }])
  .controller('PhoneDetailCtrl', function($routeParams, $http, $scope) {
    $scope.phoneId = $routeParams.phoneId;

    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.mainImageUrl = data.images[0];
      $scope.phone = data;
    }).error(function(){
      throw 'encountered an error getting phone detail data';
   });

   $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  });
