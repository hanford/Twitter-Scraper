'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.services',
  'myApp.directives',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('view1', {
      url: "/view1",
      controller: 'MyCtrl1',
      templateUrl: "partials/partial1.html"
    })
    
    $urlRouterProvider.otherwise("/view1");
    $locationProvider.html5Mode(true);

});
