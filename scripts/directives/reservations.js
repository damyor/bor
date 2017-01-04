'use strict';

angular.module('bor').directive('reservations', function () {
    return {
        templateUrl: 'templates/reservations.html',
        controller: function ($scope) {
            $scope.persons = [];
            for (var i = 1 ; i < 21 ; ++i) {
            	$scope.persons.push({
            		value: i,
            		label: i + ' човека'
            	});
            }

            $scope.time = new Date(1970, 0, 1, 20, 0, 0);
            $scope.date = new Date();

            $scope.reserve = function () {

            };
        }
    };
});
