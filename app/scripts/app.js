'use strict';

/**
 * @ngdoc overview
 * @name cis411Hw5App
 * @description
 * # cis411Hw5App
 *
 * Main module of the application.
 */
angular
  //load all app modules here and not in individual controllers
  .module('cis411Hw5App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngAnimate',   //like these
	'ui.bootstrap' //for angular-ui
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
	.when('/tutorials', {
        templateUrl: 'views/tutorials.html',
        controller: 'TutorialsCtrl',
        controllerAs: 'tutorials'
      })
	.when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
