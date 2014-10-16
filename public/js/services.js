'use strict';
var twiturl = '/api/twit/';

angular.module('myApp.services', [])
.service('apiService', ['$http', function($http) {
  return {
    search: function(query) {
      return $http.get(twiturl + 'users?query=' + query)
    },
    follow: function(id) {
      console.log(id)
      return $http.post(twiturl + 'follow?id=' + id)
    },
    tweets: function(query) {
      return $http.get(twiturl + 'tweets?query=' + query)
    }
  }
}])
