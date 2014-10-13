'use strict';

angular.module('myApp.controllers', ['myApp.services'])

.controller('AppCtrl', function($scope, $http) {
  console.log('loaded')

}).controller('MyCtrl1', function($scope, $http, apiService) {
  $scope.users = [];

  $scope.search = function(query) {
    $scope.loading = true;
    $scope.names = query.split(/\r\n|\r|\n/g)
    console.log($scope.names.length > 1)
    if ($scope.names.length > 1) {
      setTimeout(function() {
        for (var i = 0; i < $scope.names.length; i++) {
          console.log($scope.names[i])
          apiService.search($scope.names[i]).then(function(response) {
            console.log(response)
          })
        }
      }, 1000)
      $scope.loading = false;
    } else {
      apiService.search(query).then(function(response) {
        console.log(response)
        $scope.loading = false;
        $scope.users = response.data.users;
      })
    }
  }
  $scope.hashtag = function(query) {
    console.log(encodeURI(query));
    $scope.loading = true;
    $http.get('/api/search/tweets?query=' + encodeURI(query)).then(function(response) {
      $scope.loading = false;
      if (response.data && response.data.tweets && response.data.tweets.statuses) {
        $scope.tweets = response.data.tweets.statuses;
      }
    })
  }
  $scope.clear = function() {
    $scope.tweets = [];
    $scope.users = [];
  }
})
