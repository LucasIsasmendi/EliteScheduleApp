(function() {
	'use strict';
	angular.module('eliteApp').controller('LocationCtrl', ['eliteApi', LocationCtrl]);
	
	function LocationCtrl(eliteApi) {
		var vm = this;

		var data = eliteApi.getLeagueData().then(function(data){
			vm.locations = data.locations;	
		});		
	};
})();