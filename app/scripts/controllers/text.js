'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
.controller('TextCtrl', function (
    $routeParams,
    $scope,
    Verses
  ) {
    Verses.get($routeParams)
    .success(function(verses) {
      $scope.verses = verses;

      $scope.versions = _.groupBy(verses, 'version');
      $scope.chapters = _.groupBy(verses, 'chapter');
    });
  });
