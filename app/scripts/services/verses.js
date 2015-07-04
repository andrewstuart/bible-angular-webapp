'use strict';

/**
 * @ngdoc service
 * @name bibleApp.verses
 * @description
 * # verses
 * Service in the bibleApp.
 */
angular.module('bibleApp')
  .service('Verses', function ($http, $q) {
    var verses = this;

    verses.list = [];
    var qCache = {};

    verses.search = function(q) {
      return $q(function(resolve, reject) {

        if ( qCache[q] ) { return resolve(qCache[q]); }

        $http.get('//localhost:8089/', {params: {q: q}})

        .success(function(verseResults) {
          qCache[q] = verseResults;
          verses.list = verseResults;
          resolve(verseResults);
        })
        .error(function(reason) {
          reject(reason);
        });
      });
    };
  });
