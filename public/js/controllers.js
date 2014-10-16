'use strict';

angular.module('myApp.controllers', ['myApp.services'])

.controller('AppCtrl', function($scope, $http, apiService, $timeout) {

  $scope.search = function(query) {
    $scope.nameLists = [];
    $scope.loading = true;
    // Detecting Line Breaks
    var names = query.split(/\r\n|\r|\n/g)
    if (names.length > 1) {
      for (var i = 0; i < names.length; i++) {
        apiService.search(encodeURIComponent(names[i])).then(function(response) {
          $scope.nameLists.push(response.data.users)
          console.log($scope.nameLists)
        })
      }
      $scope.loading = false;
    } else {
      apiService.search(query).then(function(response) {
        $scope.nameLists.push(response.data.users);
        $scope.loading = false;
      })
    }
  }

  $scope.follow = function(user) {
    // Not called for now
    apiService.follow(user.id).then(function(response) {
      console.log('followed' + user)
    })
  }

  $scope.tweet = function(query) {
    $scope.loading = true;
    $scope.tweetLists = [];
    // Detecting Line Breaks
    var tweetArray = query.split(/\r\n|\r|\n/g)
    if (tweetArray.length > 1) {
      for (var i = 0; i < tweetArray.length; i++) {
        apiService.tweets(encodeURIComponent(tweetArray[i])).then(function(response) {
          $scope.tweetLists.push(response.data.tweets.statuses)
          console.log($scope.tweetLists)
          $scope.loading = false;
          // $scope.tweets = response.data.tweets.statuses;
        })
      }
    } else {
      apiService.tweets(encodeURIComponent(query)).then(function(response) {
        $scope.loading = false;
        if (response.data.tweets && response.data.tweets.statuses) {
          $scope.tweetLists.push(response.data.tweets.statuses)
          console.log(tweetLists)
        } else {
          alert('No Tweets!')
        }
      })
    }
  }

  $scope.clear = function() {
    $scope.tweetLists = [];
    $scope.nameLists = [];
    $scope.query = '';
  }
})
