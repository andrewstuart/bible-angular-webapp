'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
  .controller('ViewCtrl', function ($scope, $http, $location) {
    $http.get('//localhost:8089' + $location.path())
      .success(function(verses) {
        $scope.verses = verses;

        $scope.chapters = _.groupBy(verses, 'chapter');
      });
  });
