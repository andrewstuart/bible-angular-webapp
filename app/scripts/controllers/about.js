'use strict';

/**
 * @ngdoc function
 * @name bibleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bibleApp
 */
angular.module('bibleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
