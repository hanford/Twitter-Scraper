'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    console.log('loaded')

  }).controller('MyCtrl1', function ($scope, $http) {
    // write Ctrl here
    // $http({
    //   method: 'GET',
    //   url: '/api/tweets'
    // }).success(function (data, status, headers, config) {
    //   $scope.tweets = data.tweets;
    // }).error(function (data, status, headers, config) {
    //   $scope.tweets = [];
    // });
    $scope.users = [];

    $scope.search = function(query) {
      console.log(query)
      $http.get('/api/search/users?query=' + query).then(function(response) {
        $scope.users = response.data.users;
      })
    }
    $scope.hashtag = function(query) {
      $http.get('/api/search/tweets?query=' + query).then(function(response) {
        console.log(response.data.tweets.statuses)
        $scope.tweets = response.data.tweets.statuses;
      })
    }
    $scope.clear = function() {
      $scope.tweets = [];
      $scope.users = [];
    }
  }).controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
