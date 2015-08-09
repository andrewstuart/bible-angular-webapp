'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, Verses) {
    if ( $routeParams.q ) {
      $scope.term = $routeParams.q;

      Verses.search($scope.term).then(function(verses) {
        $scope.verses = verses;
      });
    }

    $scope.search = function(q) {
      $location.search('q', q);
    };

    Verses.getBooks().success(function(books) {
      $scope.books = books;
    });
  });
