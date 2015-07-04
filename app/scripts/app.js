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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:version?/:book/:chapter?/:verse?', {
        templateUrl: 'views/view.html',
        controller: 'ViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
