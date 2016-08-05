'use strict';

/**
 * @ngdoc directive
 * @name myApp.headerNavigationDirective
 * @description
 * Displays The Header  Navigation Template
 * @example
   <header-navigation>
   </header-navigation>
 */


angular.module('myApp.headerNavigationDirective', []).
directive('headerNavigation', function () {
  return {
    restrict: 'ACE',
    templateUrl: 'components/ui/header-navigation/header-navigation.template.html'
  };
});
