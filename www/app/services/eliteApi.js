(function() {
	'use strict';
	angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi]);
	function eliteApi($http, $q, $ionicLoading, CacheFactory) {
    var currentLeagueId;

    self.leaguesCache = CacheFactory.get("leaguesCache");
    self.leagueDataCache = CacheFactory.get("leagueDataCache");

		function getLeagues(){
      var deferred = $q.defer(),
        cacheKey = "leagues",
        leaguesData = self.leaguesCache.get(cacheKey);

      if(leaguesData){
        console.log("Found data inside cache", leaguesData);
        deferred.resolve(leaguesData);
      } else {
        $ionicLoading.show({ template: 'Loading...'});
        $http.get("http://elite-schedule.net/api/leaguedata")
          .success(function(data){
            console.log("Received schedule data via HTTP.");
            $ionicLoading.hide();
            self.leaguesCache.put(cacheKey, data);
            deferred.resolve(data);
          })
          .error(function(){
            console.log("Error while making HTTP call.");
            $ionicLoading.hide();
            deferred.reject();
          });
      }
      return deferred.promise        
		}
		function getLeagueData(){
      var deferred = $q.defer(),
        cacheKey = "leagueData-"+currentLeagueId,
        leagueData = self.leagueDataCache.get(cacheKey);
      if(leagueData){
        console.log("Found data in chace", leagueData);
        deferred.resolve(leagueData);
      } else {
        $ionicLoading.show({ template: 'Loading...'});
        $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
          .success(function(data, status){
            console.log("Received schedule data via HTTP.", data, status);
            $ionicLoading.hide();
            deferred.resolve(data);
          })
          .error(function(){
            console.log("Error while making HTTP call.");
            $ionicLoading.hide();          
            deferred.reject();
          });
      }
      return deferred.promise

		};
    function setLeagueId(leagueId){
      currentLeagueId = leagueId;
    }
		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
      setLeagueId: setLeagueId
		};
	};
})();