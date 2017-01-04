'use strict';

angular.module('bor').directive('contacts', function () {
    return {
        templateUrl: 'templates/contacts.html',
        controller: function () {
            var uluru = {lat: 42.656668, lng: 23.240463};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 16,
              center: uluru
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
        }
    };
});
