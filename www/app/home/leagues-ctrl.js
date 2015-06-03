(function() {
	'use strict';
	angular.module('eliteApp').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);
	
	function LeaguesCtrl($state, eliteApi) {
		var vm = this;

		eliteApi.getLeagues().then(function(data){
			vm.leagues = data;	
			console.log("leagues data", data);			
		});
		
		vm.selectLeague = function(id){
			eliteApi.setLeagueId(id);
			//LAI aca agrega el getLEagueData con promise
			$state.go("app.teams");
		};
	};
})();