angular.module('bibleApp')
  .config(function(VersesProvider) {
    VersesProvider.root = '//bible.astuart.co:8082';
  })
