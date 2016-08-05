'use strict';

/**
 * @ngdoc controller
 * @name parkingSlotsCtrl
 * @param {$scope,parkingSlots} - uses parkingSlots Service
 * @description
 * The parkingSlotsCtrl calls parkingSlot services and updates it's scope response value
 */

angular.module('myApp.controllers', ['myApp.parkingSlots'])
  .controller('parkingSlotsCtrl', ['$scope', 'parkingSlots', function ($scope, parkingSlots) {
    var self = this;
    parkingSlots.getData(function (data) {
      $scope.parkingSlotsReponse = data.features || {};
    });
  }]);
