'use strict';

/**
 * @ngdoc 
 * @name 
 * @param {$scope,parkingSlots} - uses parkingSlots Service
 * @description
 * contains app dependencies modules
 */
angular.module('myApp', [
  'ngResource',
  'myApp.parkingSlots',
  'myApp.headerNavigationDirective',
  'myApp.footerNavigationDirective',
  'myApp.parkingSlotsDircetive',
  'myApp.controllers'
]).
config(['$resourceProvider', function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
