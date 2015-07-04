'use strict';

/**
 * @ngdoc service
 * @name bibleApp.verses
 * @description
 * # verses
 * Service in the bibleApp.
 */
angular.module('bibleApp')
  .service('verses', function ($http) {
    var verses = this;

    verses.byId = {};

    verses.list = [];

    verses.search = function(q) {
      return $http.get('//localhost:8089/', {params: {q: q}})
        .success(function(verseResults) {

          _.extend(verses.byId, _.indexBy(verseResults, 'id'));

          verses.list = verseResults;
        });
    };
  });
