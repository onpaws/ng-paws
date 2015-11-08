'use strict';

/**
 * @ngdoc overview
 * @name ngPawsApp
 * @description
 * # ngPawsApp
 *
 * Main module of the application.
 */
angular
  .module('ngPawsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'phonecatFilters',
    'phonecatServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/phones', {
       templateUrl: 'views/phone-list.html',
       controller: 'PhoneListCtrl',
       controllerAs: 'phonelist'
     })
     .when('/phones/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'phonedetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
