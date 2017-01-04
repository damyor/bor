'use strict';

angular.module('bor').directive('bottomBar', function () {
	return {
		templateUrl: 'templates/bottom.html',
		controller: function () {
			console.log('ok');
		}
	};
});
