'use strict';

angular.module('myApp.services', [])

.service('apiService', ['$http', function($http) {
  return {
    search: function(query) {
      return $http.get('/api/search/users?query=' + query)
    },
    follow: function(id) {
      return $http.get('/api/follow?id=' + id)
    },
    tweets: function(query) {
      return $http.get('/api/search/tweets?query=' + query)
    }
  }
}])
