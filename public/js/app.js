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
    .state('main', {
      url: "/",
      controller: 'AppCtrl',
      templateUrl: "partials/main-view.html"
    })

    $urlRouterProvider.otherwise("/view1");
    $locationProvider.html5Mode(true);

});
