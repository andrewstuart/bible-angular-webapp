'use strict';

describe('Service: verses', function () {

  // load the service's module
  beforeEach(module('bibleApp'));

  // instantiate service
  var verses;
  beforeEach(inject(function (_verses_) {
    verses = _verses_;
  }));

  it('should do something', function () {
    expect(!!verses).toBe(true);
  });

});
