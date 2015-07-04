'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, $location) {
    if ( $routeParams.q ) {
      $scope.term = $routeParams.q;

      $http.get('http://localhost:8089/', {params: {q: $routeParams.q}})
        .success(function(verses) {
          $scope.verses = verses;
        });
    }

    $scope.search = function(q) {
      $location.search('q', q);
    };
  });
