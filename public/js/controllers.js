'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    console.log('loaded')

  }).controller('MyCtrl1', function ($scope, $http) {
    $scope.users = [];

    $scope.search = function(query) {
      $scope.loading = true;
      $http.get('/api/search/users?query=' + query).then(function(response) {
        $scope.loading = false;
        $scope.users = response.data.users;
      })
    }
    $scope.hashtag = function(query) {
      console.log(encodeURI(query));
      $scope.loading = true;
      $http.get('/api/search/tweets?query=' + encodeURI(query)).then(function(response) {
        $scope.loading = false;
        if (response.data && response.data.tweets && response.data.tweets.statuses) {
          $scope.tweets = response.data.tweets.statuses;
          $scope.nothing = false;
        } else {
          $scope.nothing = true;
        }
      })
    }
    $scope.clear = function() {
      $scope.tweets = [];
      $scope.users = [];
    }
  })
