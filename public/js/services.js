'use strict';

angular.module('myApp.services', [])

.service('apiService', ['$http', function($http) {
  return {
    search: function(query) {
      return $http.get('/api/search/users?query=' + query)
    },
    follow: function(id) {
      // ?id=' + id)
      return $http.get('/api/follow/')
    },
    tweets: function(tweet2search) {
      return $http.get('/api/search/tweets?query=' + tweet2search)
    }
  }
}])
