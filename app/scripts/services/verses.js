'use strict';

/**
 * @ngdoc service
 * @name bibleApp.verses
 * @description
 * # verses
 * Service in the bibleApp.
 */
angular.module('bibleApp')
  .provider('Verses', function () {

    var vp = this;

    /**
     * @ngdoc
     * @propertyOf bibleApp.service:VersesProvider
     * @name bibleApp.service:VersesProvider#root
     * @description The http root. Should end in a slash.
     */
    vp.root = '//bible:8082';

    vp.verseRoot = 'text';

    this.$get = function($http, $q) {
      function VerseProvider () {
        var verses = this;

        verses.list = [];
        var qCache = {};

        verses.search = function(q) {
          return $q(function(resolve, reject) {

            if ( qCache[q] ) { return resolve(qCache[q]); }

            $http.get(vp.root + '/', {params: {q: q}})

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

        verses.get = function(cfg) {
          var path = [vp.root, vp.verseRoot];

          if ( cfg.version ) {
            path.push(cfg.version);
          }
          if ( cfg.book ) {
            path.push(cfg.book);

            if ( cfg.chapter ) {
              path.push(cfg.chapter);

              if ( cfg.verse ) {
                path.push(cfg.verse);
              }
            }
          }

          return $http.get(path.join('/'));
        };

        verses.getBooks = function() {
          return $http.get(vp.root + '/books');
        };
      }
      return new VerseProvider();
    };
  });
