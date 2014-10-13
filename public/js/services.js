'use strict';

angular.module('myApp.services', [])

.service('apiService', ['$http', function($http) {
  return {
    search: function(query) {
      return $http.get('/api/search/users?query=' + query)
    }
  }
}])
