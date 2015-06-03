(function() {
	'use strict';
	angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams', '$ionicPopup', 'eliteApi', 'myTeamsService', teamDetailCtrl]);

	function teamDetailCtrl($stateParams, $ionicPopup, eliteApi, myTeamsService) {
		var vm = this;

		vm.teamId = Number($stateParams.id);
		var data = eliteApi.getLeagueData().then(function(data){
			var team = _.chain(data.teams)
						.pluck('divisionTeams')
						.flatten()
						.find({"id": vm.teamId})
						.value();
			console.log("team bef",team);
			console.log("data league",data);
			vm.teamFollow = team;
			vm.leagueName = data.league.name;
			vm.teamName = team.name;

			vm.games = _.chain(data.games)
						.filter(isTeamInGame)
						.map(function(item) {
							var isTeam1 = (item.team1Id === vm.teamId ? true : false);
							var opponentName = isTeam1 ? item.team2 : item.team1;
							var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score,item.team2Score);
							return {
								gameId: item.id,
								opponent: opponentName,
								time: item.time,
								location: item.location,
								locationUrl: item.locationUrl,
								scoreDisplay: scoreDisplay,
								homeAway: (isTeam1 ? "vs." : "at")
							};
						})
						.value();
			vm.teamStanding = _.chain(data.standings)
								.pluck('divisionStandings')
								.flatten()
								.find({"teamId": vm.teamId})
								.value();

			
		});

		vm.following = false;
		vm.toggleFollow = function(){
			if(vm.following) {
				var confirmPoup = $ionicPopup.confirm({
					title: 'Unfollow?',
					template: 'Are you sure you want to unfollow?'
				});
				confirmPoup.then(function(res) {
					if(res) {
						vm.following = !vm.following;
						myTeamsService.unfollowTeam(vm.teamFollow.id)
					}
				});
			} else{
				vm.following = !vm.following;
				myTeamsService.followTeam({id: vm.teamFollow.id, name:vm.teamFollow.name ,leagueName: vm.leagueName});
			}
		};

	    function isTeamInGame(item){
	      return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
	    }
	    function getScoreDisplay(isTeam1, team1Score, team2Score){
	      if(team1Score && team2Score){
	        var teamScore = (isTeam1 ? team1Score : team2Score);
	        var opponentScore = (isTeam1 ? team2Score : team1Score);
	        var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
	        return winIndicator + teamScore + "-" + opponentScore;
	      } else {
	      	return "";
	      }
    	}
	};
})();