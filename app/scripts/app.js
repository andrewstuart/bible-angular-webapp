'use strict';

/**
 * @ngdoc overview
 * @name bibleApp
 * @description
 * # bibleApp
 *
 * Main module of the application.
 */
angular
  .module('bibleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/text/:version?/:book/:chapter?/:verse?', {
        templateUrl: 'views/text.html',
        controller: 'TextCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
