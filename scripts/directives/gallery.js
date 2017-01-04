'use strict';

angular.module('bor').directive('gallery', function () {
    return {
        templateUrl: 'templates/gallery.html',
        replace: true,
        controller: function ($scope) {
            $scope.images = [];
            for (var i = 1 ; i < 8 ; ++i) {
                $scope.images.push(i + '.jpg');
            }

            var index = 0;
            $scope.currentImage = $scope.images[index];

            $scope.prev = function () {
                index = index === 0 ? ($scope.images.length - 1) : (index - 1);
                $scope.currentImage = $scope.images[index];
            };

            $scope.next = function () {
                index = index === ($scope.images.length - 1) ? 0 : (index + 1);
                $scope.currentImage = $scope.images[index];
            };
        }
    };
});
