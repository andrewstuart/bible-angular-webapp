'use strict';

describe('Controller: TextCtrl', function () {

  // load the controller's module
  beforeEach(module('bibleApp'));

  var ViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewCtrl = $controller('TextCtrl', {
      $scope: scope
    });
  }));
});
