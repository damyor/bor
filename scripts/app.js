var bor = angular.module('bor', ['duScroll']);

bor.controller('controller', function($scope, $timeout, $document) {
    $scope.hideGallery = true;
    $scope.others = true;
    $scope.gallery = true;

    $timeout(function () {
        $scope.gallery = false;
    }, 10);

    function scrollTo(menu) {
        var id;
        if (menu === 'Начало') {
            id = 'home';
        } else if (menu === 'За нас') {
            id = 'aboutUs';
        } else if (menu === 'Меню') {
            id = 'menu';
        } else if (menu === 'Резервации') {
            id = 'reservations';
        } else if (menu === 'Контакти') {
            id = 'contacts';
        }
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 90, 500);
    }

    $scope.selectMenu = function (menu) {
        if (menu === 'Галерия') {
            $scope.hideOthers = true;
            $timeout(function () {
                $scope.gallery = true;
                $scope.others = false;
                $scope.$$postDigest(function() {
                    $scope.hideGallery = false;
                })
            }, 500);
        } else if (!$scope.hideGallery) {
            $scope.hideGallery = true;
            $timeout(function () {
                $scope.gallery = false;
                $scope.others = true;
                $scope.$$postDigest(function () {
                    $scope.hideOthers = false;
                    $timeout(function () {
                        scrollTo(menu);
                    }, 10);
                });
            }, 500);
        } else {
            scrollTo(menu);
        }
    };
});
