(function() {
	'use strict';
	angular.module('eliteApp').factory('eliteApi', [eliteApi]);
	function eliteApi() {
		var leagues = [{
					      "id": 1027,
					      "name": "Bonnie Branch MS",
					      "locationUrl": "http://goo.gl/mRkKqf",
					      "address": "4979 Ilchester Rd, Ellicott City, MD 21043",
					      "latitude": 39.231462,
					      "longitude": -76.772347
					    },
					    {
					      "id": 1004,
					      "name": "Howard HS",
					      "locationUrl": "http://goo.gl/maps/xvgPm",
					      "address": "8700 Old Annapolis Road, Ellicott City, MD 21043",
					      "latitude": 39.22,
					      "longitude": -76.81
					    },
					    {
					      "id": 3,
					      "name": "Meadowbrook Ct. 1",
					      "locationUrl": "http://goo.gl/rHw5Rj",
					      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
					      "latitude": 39.24,
					      "longitude": -76.82
					    },
					    {
					      "id": 4,
					      "name": "Meadowbrook Ct. 2",
					      "locationUrl": "http://goo.gl/rHw5Rj",
					      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
					      "latitude": 39.24,
					      "longitude": -76.82
					    },
					    {
					      "id": 5,
					      "name": "Meadowbrook Ct. 3",
					      "locationUrl": "http://goo.gl/rHw5Rj",
					      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
					      "latitude": 39.24,
					      "longitude": -76.82
					    },
					    {
					      "id": 6,
					      "name": "Meadowbrook Ct. 4",
					      "locationUrl": "http://goo.gl/rHw5Rj",
					      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
					      "latitude": 39.24,
					      "longitude": -76.82
					    },
					    {
					      "id": 1003,
					      "name": "North Laurel Comm. Center Ct. 5",
					      "locationUrl": "http://goo.gl/maps/DlXFH",
					      "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
					      "latitude": 39.11,
					      "longitude": -76.83
					    },
					    {
					      "id": 1011,
					      "name": "North Laurel Comm. Center Ct. 6",
					      "locationUrl": "http://goo.gl/maps/DlXFH",
					      "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
					      "latitude": 39.11,
					      "longitude": -76.83
					    }];
		var leagueData = [{
						      "id": 1027,
						      "name": "Bonnie Branch MS",
						      "locationUrl": "http://goo.gl/mRkKqf",
						      "address": "4979 Ilchester Rd, Ellicott City, MD 21043",
						      "latitude": 39.231462,
						      "longitude": -76.772347
						    },
						    {
						      "id": 1004,
						      "name": "Howard HS",
						      "locationUrl": "http://goo.gl/maps/xvgPm",
						      "address": "8700 Old Annapolis Road, Ellicott City, MD 21043",
						      "latitude": 39.22,
						      "longitude": -76.81
						    },
						    {
						      "id": 3,
						      "name": "Meadowbrook Ct. 1",
						      "locationUrl": "http://goo.gl/rHw5Rj",
						      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
						      "latitude": 39.24,
						      "longitude": -76.82
						    },
						    {
						      "id": 4,
						      "name": "Meadowbrook Ct. 2",
						      "locationUrl": "http://goo.gl/rHw5Rj",
						      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
						      "latitude": 39.24,
						      "longitude": -76.82
						    },
						    {
						      "id": 5,
						      "name": "Meadowbrook Ct. 3",
						      "locationUrl": "http://goo.gl/rHw5Rj",
						      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
						      "latitude": 39.24,
						      "longitude": -76.82
						    },
						    {
						      "id": 6,
						      "name": "Meadowbrook Ct. 4",
						      "locationUrl": "http://goo.gl/rHw5Rj",
						      "address": "5001 Meadowbrook Lane, Ellicott City, MD",
						      "latitude": 39.24,
						      "longitude": -76.82
						    },
						    {
						      "id": 1003,
						      "name": "North Laurel Comm. Center Ct. 5",
						      "locationUrl": "http://goo.gl/maps/DlXFH",
						      "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
						      "latitude": 39.11,
						      "longitude": -76.83
						    },
						    {
						      "id": 1011,
						      "name": "North Laurel Comm. Center Ct. 6",
						      "locationUrl": "http://goo.gl/maps/DlXFH",
						      "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
						      "latitude": 39.11,
						      "longitude": -76.83
							}];
		function getLeagues(){
			return leagues;
		}
		function getLeagueData(){
			return leagueData;

		}
		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData
		};
	};
})();