'use strict';

/**
 * @ngdoc directive
 * @name myApp.footerNavigationDirective
 * @description
 * Displays The Footer  Navigation Template
 * @example
   <footer-navigation>
   </footer-navigation>
 */


angular.module('myApp.footerNavigationDirective', []).
directive('footerNavigation', function () {
  return {
    restrict: 'ACE',
    templateUrl: 'components/ui/footer-navigation/footer-navigation.directive.html'
  };
});
