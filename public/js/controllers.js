'use strict';

angular.module('myApp.controllers', ['myApp.services'])

.controller('AppCtrl', function($scope, $http) {

}).controller('MyCtrl1', function($scope, $http, apiService) {
  $scope.search = function(query) {
    $scope.lists = [];
    $scope.loading = true;
    $scope.names = query.split(/\r\n|\r|\n/g)
    if ($scope.names.length > 1) {
      setTimeout(function() {
        for (var i = 0; i < $scope.names.length; i++) {
          apiService.search($scope.names[i]).then(function(response) {
            $scope.lists.push(response.data.users)
            console.log($scope.lists)
          })
        }
        $scope.loading = false;
      }, 1000)
    } else {
      apiService.search(query).then(function(response) {
        $scope.lists.push(response.data.users);
        $scope.loading = false;
      })
    }
  }

  $scope.follow = function(user) {
    apiService.follow(user.id).then(function(response){
      console.log('followed' + user)
    })
  }
  $scope.hashtag = function(query) {
    console.log(encodeURI(query));
    $scope.loading = true;
    // Encoding for hastags and literal searches
    var tweet2search = encodeURI(query);
    apiService.tweets(tweet2search).then(function(response) {
      $scope.loading = false;
      // Making sure the return isn't an empty array
      if (response.data.tweets.statuses.length < 1) {
        alert('No Tweets!')
      }
      // Making sure the return exsists
      if (response.data.tweets && response.data.tweets.statuses) {
        $scope.tweets = response.data.tweets.statuses;
      }
    })
  }
  $scope.clear = function() {
    $scope.tweets = [];
    $scope.names = [];
    $scope.lists = [];
    $scope.query = '';
  }
})
