'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.search = function(q) {
      $http.get('http://localhost:8089/', {params: {q: q}})
        .success(function(verses) {
          $scope.verses = verses;
        });
    };
  });
