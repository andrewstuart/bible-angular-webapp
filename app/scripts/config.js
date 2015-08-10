angular.module('bibleApp')
  .config(function(VersesProvider) {
    VersesProvider.root = '//bible-api.astuart.co';
  })
