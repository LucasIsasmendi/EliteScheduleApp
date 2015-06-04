(function() {
	'use strict';
	angular.module('eliteApp').controller('LocationMapCtrl', ['$stateParams', 'eliteApi', LocationMapCtrl]);
	
	function LocationMapCtrl($stateParams, eliteApi) {
		var vm = this;

		vm.locationId = Number($stateParams.id);

		vm.map = {
			center: {
				latitude: 38.897677,
				longitude: -77.036530
			},
			zoom: 15
		};
		vm.marker = {}

		eliteApi.getLeagueData().then(function(data) {
			vm.location = _.find(data.locations, { id: vm.locationId });
			vm.marker = {
				id:0,
				coords: {
			        latitude: vm.location.latitud,
			        longitude: vm.location.longitude
				}
			};
         vm.marker.options = {
            draggable: true,
            labelContent: "lat: " + vm.location.longitude + ' ' + 'lon: ' + vm.location.latitud,
            labelAnchor: "100 0",
            labelClass: "marker-labels",
		        title: vm.location.name + "<br/>(Tap for directions)",
            	showWindow: true            
          };			
			vm.map.center.latitude = vm.location.latitude;
			vm.map.center.longitude = vm.location.longitude;
		});
		vm.locationClicked = function(marker){
			console.log("locationClicked", marker);
			window.location = "geo: " + marker.coords.latitude +","+ marker.coords.longitude;
		}
	};
})();