'use strict';
/**
 * @ngdoc service
 * @name myApp.parkingSlot
 * @param {$resource} - uses ngResource
 * @description
 * The service will call citysdk REST API and then gets avaliable parking slots information within the city
 */

angular.module('myApp.parkingSlots', []).
service('parkingSlots', function ($resource) {
  return $resource('http://api.citysdk.waag.org/layers/parking.garage/objects/', {}, {
    getData: { method: 'GET', isArray: false, params: { per_page: 25 } }
  });
});
