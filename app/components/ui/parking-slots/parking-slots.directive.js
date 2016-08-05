'use strict';

/**
 * @ngdoc directive
 * @name myApp.parkingSlotsDircetive
 * @description
 * This component displays the list of parking slots available and theirs insights
 * @example
   <parking-slots>
   </parking-slots>
 */


angular.module('myApp.parkingSlotsDircetive', []).
directive('parkingSlots', function () {
  return {
    restrict: 'ACE',
    templateUrl: 'components/ui/parking-slots/parking-slots.template.html',
    replace: true,
    scope: {
      data: '=content',
      range: '=limit'
    },
    link: function ($scope, element, attrs) {
      $scope.displayMap = false;
      $scope.check = function ($event) {
        var coordinates = angular.element($event.target).attr('data-coordinates');
        $scope.mapimage = 'http://maps.googleapis.com/maps/api/staticmap?center=' + coordinates + '&zoom=14&size=750x500&sensor=false';
        $scope.info = angular.fromJson(angular.element($event.target).attr('data-info'));
        $scope.displayMap = true;
      };
    }
  };
});
