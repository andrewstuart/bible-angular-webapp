'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
.controller('MainCtrl', function (
    $location,
    $routeParams,
    $scope,
    Verses
  ) {
    $scope.verses = Verses;

    Verses.getBooks().then(function() {
      if ( $routeParams.q ) {
        $scope.term = $routeParams.q;

        Verses.search($scope.term).then(function(verses) {
          _.each(verses, function(v) {
            v.bookName = Verses.books.byId[v.book].name;
          });
          $scope.verseResults = verses;
        });
      }
    });

    $scope.search = function(q) {
      $location.search('q', q);
    };
  });
