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
		var leagueData ={
  "league": {
    "name": "Spring Fling 2015 Tournament",
    "id": 2039,
    "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\\\n\\\n**Sunday Championship Games: Championship Teams will be listed here and posted on site when determined**\\\n\\\t\\\t\\\t\\\t\\\t\\\n- **3pm NLCC 5 and NLCC 6:  9U Semis - (NLCC ct 5: Balt Supreme vs Perry Hall) and (NLCC ct 6: Ballerville vs HC Elite)**\\\n- **5pm NLCC 5: 9U  Champions - HC Elite  36 - 32 over Balt Supreme**\\\n- **6:15pm MAC ct 1: 15U Champions - Severn Elite 43-30 over Team Dedication**\\\n- **6:15pm MAC ct 2: 14U Black Div Champions - Ravens Chamblee 51-46 over Hoopmaster - BC**\\\n- **6:15pm MAC ct 3: 14U White-Green Champions -  DC Premier 44-30 over HC Elite - Hollwedel**\\\n- **6:15pm MAC ct 4: 11U Champions - MD Playmakers 50-42 over MADE Basketball**\\\n- **7:15pm MAC ct 1: 17U Championship not played**\\\n- **7:15pm MAC ct 2: 16U Champions - Advanced Hoops (PA) 56 - 42 over HC Elite - Tringali**\\\n- **7:15pm MAC ct 3: 12U Champions - MD Playmaker Red 48 -32 over MD Playmaker Black**\\\n- **7:15pm MAC ct 4: 13U Champios All City 34 - 30 over Carroll B-ball**\\\n\\\n\\\n**Daily Admission:**\\\n\\\n- Friday:  $3.   \\\n- Saturday: $5. \\\n- Sunday: $5. ",
    "rulesScreen": "**HS Federation rules except where noted.**\\\n\\\t\\\t\\\t\\\t\\\t\\\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \\\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \\\n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \\\n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \\\n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \\\n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \\\n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\\\n- No technical fouls for book errors.  Just correct the mistake and move on.\\\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\\\n- No dunking at sites where \\\"No Dunking\\\" is posted on the backboards. \\\n\\\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\\\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\\\n•\\\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\\\n•\\\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\\\n•\\\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\\\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\\\n\\\n<br/>The following will be used to determine top two teams for the Championship game:\\\n<br/>- Overall Record (Wins vs. Losses)\\\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\\\n<br/>- Record vs Teams tied. \\\n<br/>- Point Differential vs Teams tied (max 15 points per game)\\\n<br/>- Overall Point Differential (max 15 point per game)\\\n<br/>- Coin Flip\\\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
  },
  "teams": [
    {
      "divisionName": " 11U",
      "divisionTeams": [
        {
          "id": 6394,
          "name": "Gainesville  Elite",
          "coach": "Adrian Gresham"
        },
        {
          "id": 6393,
          "name": "Gainesville Hurricanes",
          "coach": "Travis Torco"
        },
        {
          "id": 6400,
          "name": "HCYP Sharks",
          "coach": "Anthony Tookes"
        },
        {
          "id": 6395,
          "name": "LBA Attack",
          "coach": "Darryl Branch "
        },
        {
          "id": 6404,
          "name": "Liberty Road Ballers",
          "coach": "William Firzgerald"
        },
        {
          "id": 6397,
          "name": "MADE Basketball 11U",
          "coach": "Carl Travis"
        },
        {
          "id": 6398,
          "name": "MD Playmakers 11U",
          "coach": "Onzilo Pulliam"
        },
        {
          "id": 6468,
          "name": "Randallstown Runnin Rebels 11U",
          "coach": "Charles Wilson"
        },
        {
          "id": 6458,
          "name": "Ravens - Conroy 11U",
          "coach": "Scott Conroy"
        }
      ]
    },
    {
      "divisionName": " 12U",
      "divisionTeams": [
        {
          "id": 6405,
          "name": "Calvert Elite 12U",
          "coach": "Roy Holloway"
        },
        {
          "id": 6467,
          "name": "Crofton B-ball",
          "coach": "Neil Kursban"
        },
        {
          "id": 6409,
          "name": "Fairfax Stars 12U",
          "coach": "Erik Cassily"
        },
        {
          "id": 6401,
          "name": "HC Elite Green 12U",
          "coach": "James Stefan"
        },
        {
          "id": 6402,
          "name": "HC Elite White 12U",
          "coach": "Eddie OMalley"
        },
        {
          "id": 6407,
          "name": "MD Playmakers  Black 12U",
          "coach": "Alisha Miller"
        },
        {
          "id": 6408,
          "name": "MD Playmakers Red 12U",
          "coach": "Blanchard Hurd"
        },
        {
          "id": 6406,
          "name": "Pikesville Panthers 12U",
          "coach": "Anthony Adams"
        },
        {
          "id": 6403,
          "name": "Ravens - Miller 12U",
          "coach": "John Miller"
        }
      ]
    },
    {
      "divisionName": " 13U",
      "divisionTeams": [
        {
          "id": 6415,
          "name": "All City Elite 13u",
          "coach": "Jeff Chappell"
        },
        {
          "id": 6413,
          "name": "Carroll B-ball 13U",
          "coach": "George Wunder"
        },
        {
          "id": 6414,
          "name": "Cyclones 13U",
          "coach": "Joe Alendar"
        },
        {
          "id": 6418,
          "name": "HC Elite 13U",
          "coach": "Steve Michelotti"
        },
        {
          "id": 6410,
          "name": "Mid-Penn Motion 13U",
          "coach": "Jonathan Breeden"
        },
        {
          "id": 6411,
          "name": "Ravens Swartz 13U",
          "coach": "Tim Swartz"
        },
        {
          "id": 6416,
          "name": "Team Dedication McNight 13U",
          "coach": "Justin McKnight"
        },
        {
          "id": 6412,
          "name": "WHC Force 13U",
          "coach": "Percy Moore"
        },
        {
          "id": 6417,
          "name": "WV Panthers 13U",
          "coach": "Corey Layton"
        }
      ]
    },
    {
      "divisionName": " 14U Black",
      "divisionTeams": [
        {
          "id": 6422,
          "name": "Columbia Ravens Chamblee 14U",
          "coach": "Jeff Chamblee"
        },
        {
          "id": 6425,
          "name": "Hoopmasters BC 14U",
          "coach": "Brandon"
        },
        {
          "id": 6420,
          "name": "Lake Shore Elite 14U",
          "coach": "Brian Brady"
        },
        {
          "id": 6423,
          "name": "South Carroll B-ball 14U",
          "coach": "Alex Blazek"
        },
        {
          "id": 6433,
          "name": "URBANA ELITE 14U",
          "coach": "JIM NOLAN"
        }
      ]
    },
    {
      "divisionName": " 14U Green",
      "divisionTeams": [
        {
          "id": 6419,
          "name": "Columbia Ravens Held  14U",
          "coach": "Rich Held"
        },
        {
          "id": 6424,
          "name": "DC Bulldogs 14U",
          "coach": "Chris Grigorian"
        },
        {
          "id": 6429,
          "name": "District Hoops 14U",
          "coach": "Daryll Norris"
        },
        {
          "id": 6430,
          "name": "HC Elite - Hollwedel 14U",
          "coach": "Chad Hollwedel"
        },
        {
          "id": 6426,
          "name": "Team Dedication - Hale 14U",
          "coach": "Tim Hale"
        }
      ]
    },
    {
      "divisionName": " 14U White",
      "divisionTeams": [
        {
          "id": 6421,
          "name": "Calvert Elite 14U",
          "coach": "Roy Holloway"
        },
        {
          "id": 6427,
          "name": "DC Premier 14U",
          "coach": "Steven Lee"
        },
        {
          "id": 6431,
          "name": "HC Elite - Phillips 14U",
          "coach": "Bill Phillips"
        },
        {
          "id": 6428,
          "name": "Mavs Select 14U",
          "coach": "kelly rowles"
        },
        {
          "id": 6432,
          "name": "Mid Atlantic Select Mayers 14U",
          "coach": "Kody Mayers"
        }
      ]
    },
    {
      "divisionName": " 15U Green",
      "divisionTeams": [
        {
          "id": 6436,
          "name": "Bethesda Bullets 15U",
          "coach": "Brandon Howell/Rex Garcia"
        },
        {
          "id": 6438,
          "name": "Carroll Bball - Selby 15u",
          "coach": "Fred Selby"
        },
        {
          "id": 6439,
          "name": "Iron Horse 15U",
          "coach": "Dave Bauer"
        },
        {
          "id": 6437,
          "name": "Ravens  - Schubert 15U",
          "coach": "Todd Schubert"
        },
        {
          "id": 6441,
          "name": "Team Dedication - Kirkland 15U",
          "coach": "Dennis Kirkland"
        }
      ]
    },
    {
      "divisionName": " 15U White",
      "divisionTeams": [
        {
          "id": 6435,
          "name": "Bedlam Basketball 15U",
          "coach": "mike mologne"
        },
        {
          "id": 6434,
          "name": "BRYC Tarheels 15U",
          "coach": "Greg Shanton"
        },
        {
          "id": 6442,
          "name": "MYBA Wildcats 15U",
          "coach": "Ramsey R"
        },
        {
          "id": 6440,
          "name": "Ravens - Cross 15U",
          "coach": "BILL BALL"
        },
        {
          "id": 6464,
          "name": "Severn Elite",
          "coach": "Coach Brown"
        },
        {
          "id": 6443,
          "name": "WV Panthers 15U",
          "coach": "Corey Layton"
        }
      ]
    },
    {
      "divisionName": " 16U  Green",
      "divisionTeams": [
        {
          "id": 6446,
          "name": "Advanced Hoops 16U",
          "coach": "Jeff Thompson"
        },
        {
          "id": 6450,
          "name": "DMV Running Rebels 16U",
          "coach": "Dante Thomas"
        },
        {
          "id": 6447,
          "name": "HC Elite - Thai 16U",
          "coach": "gary thai"
        },
        {
          "id": 6448,
          "name": "Ravens - Tucker 16U",
          "coach": "David Tucker"
        },
        {
          "id": 6449,
          "name": "Westminster Scott Cole 16U",
          "coach": "Scott Cole"
        }
      ]
    },
    {
      "divisionName": " 16U White",
      "divisionTeams": [
        {
          "id": 6451,
          "name": "HC Elite - Eudell 16U",
          "coach": "Corey Eudell"
        },
        {
          "id": 6445,
          "name": "HC Elite - Tringali 16U",
          "coach": "Chris Tringali"
        },
        {
          "id": 6452,
          "name": "MD Playmakers - Black 16U",
          "coach": "Aaron Jordan"
        },
        {
          "id": 6454,
          "name": "Mid Atlantic Select 16U",
          "coach": "James Lee"
        },
        {
          "id": 6444,
          "name": "Urbana Hawks 16U",
          "coach": "Jon Wallace"
        }
      ]
    },
    {
      "divisionName": " 17U",
      "divisionTeams": [
        {
          "id": 6459,
          "name": "Baltimore Supreme 17U",
          "coach": "Bruce Spruel"
        },
        {
          "id": 6455,
          "name": "HC Elite 98 Green 17U",
          "coach": "Mike Hightower"
        },
        {
          "id": 6453,
          "name": "HC Elite 98 White 17U",
          "coach": "bill nap"
        },
        {
          "id": 6456,
          "name": "LIONS 17U",
          "coach": "Jared Noble"
        },
        {
          "id": 6457,
          "name": "Ravens - Ingersoll 17U",
          "coach": "Dan Ingersoll"
        }
      ]
    },
    {
      "divisionName": " 9U",
      "divisionTeams": [
        {
          "id": 6460,
          "name": "1st Seed 9U",
          "coach": ""
        },
        {
          "id": 6461,
          "name": "2nd Seed 9U",
          "coach": null
        },
        {
          "id": 6462,
          "name": "3rd Seed 9U",
          "coach": null
        },
        {
          "id": 6463,
          "name": "4th Seed 9U",
          "coach": null
        },
        {
          "id": 6399,
          "name": "Ballerville DMV 9U",
          "coach": "Andrew Sewell"
        },
        {
          "id": 6391,
          "name": "Baltimore Supreme 9U",
          "coach": "Anthony Brooks"
        },
        {
          "id": 6392,
          "name": "HCElite 9U",
          "coach": "Dave Crabtree"
        },
        {
          "id": 6390,
          "name": "Perry Hall Boys 9U",
          "coach": "Mark Healy"
        },
        {
          "id": 6465,
          "name": "Semi 1 v 4 Winner",
          "coach": null
        },
        {
          "id": 6466,
          "name": "Semi 2 v 3 winner",
          "coach": null
        }
      ]
    }
  ],
  "locations": [
    {
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
    }
  ],
  "games": [
    {
      "id": 12882,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Ravens - Ingersoll 17U",
      "team1Id": 6457,
      "team2": "HC Elite 98 White 17U",
      "team2Id": 6453,
      "team1Score": "67",
      "team2Score": "63",
      "time": "2015-05-01T18:00:00"
    },
    {
      "id": 12870,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Columbia Ravens Held  14U",
      "team1Id": 6419,
      "team2": "HC Elite - Hollwedel 14U",
      "team2Id": 6430,
      "team1Score": "31",
      "team2Score": "34",
      "time": "2015-05-01T18:30:00"
    },
    {
      "id": 12890,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Crofton B-ball",
      "team1Id": 6467,
      "team2": "HC Elite White 12U",
      "team2Id": 6402,
      "team1Score": "30",
      "team2Score": "65",
      "time": "2015-05-01T19:00:00"
    },
    {
      "id": 12928,
      "location": "Howard HS",
      "locationUrl": "http://goo.gl/maps/xvgPm",
      "locationId": 1004,
      "team1": "Ravens - Tucker 16U",
      "team1Id": 6448,
      "team2": "Westminster Scott Cole 16U",
      "team2Id": 6449,
      "team1Score": "47",
      "team2Score": "38",
      "time": "2015-05-01T19:00:00"
    },
    {
      "id": 12930,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Mid Atlantic Select 16U",
      "team1Id": 6454,
      "team2": "Urbana Hawks 16U",
      "team2Id": 6444,
      "team1Score": "47",
      "team2Score": "34",
      "time": "2015-05-01T19:30:00"
    },
    {
      "id": 12938,
      "location": "Howard HS",
      "locationUrl": "http://goo.gl/maps/xvgPm",
      "locationId": 1004,
      "team1": "Ravens - Miller 12U",
      "team1Id": 6403,
      "team2": "MD Playmakers Red 12U",
      "team2Id": 6408,
      "team1Score": "38",
      "team2Score": "41",
      "time": "2015-05-01T20:00:00"
    },
    {
      "id": 12897,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "South Carroll B-ball 14U",
      "team1Id": 6423,
      "team2": "Hoopmasters BC 14U",
      "team2Id": 6425,
      "team1Score": "35",
      "team2Score": "48",
      "time": "2015-05-01T20:00:00"
    },
    {
      "id": 12913,
      "location": "Howard HS",
      "locationUrl": "http://goo.gl/maps/xvgPm",
      "locationId": 1004,
      "team1": "LIONS 17U",
      "team1Id": 6456,
      "team2": "HC Elite 98 Green 17U",
      "team2Id": 6455,
      "team1Score": "50",
      "team2Score": "72",
      "time": "2015-05-01T21:00:00"
    },
    {
      "id": 12806,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Hoopmasters BC 14U",
      "team1Id": 6425,
      "team2": "URBANA ELITE 14U",
      "team2Id": 6433,
      "team1Score": "50",
      "team2Score": "43",
      "time": "2015-05-02T08:00:00"
    },
    {
      "id": 12933,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "HC Elite 98 Green 17U",
      "team1Id": 6455,
      "team2": "Ravens - Ingersoll 17U",
      "team2Id": 6457,
      "team1Score": "66",
      "team2Score": "41",
      "time": "2015-05-02T08:00:00"
    },
    {
      "id": 12804,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Cyclones 13U",
      "team1Id": 6414,
      "team2": "WHC Force 13U",
      "team2Id": 6412,
      "team1Score": "50",
      "team2Score": "40",
      "time": "2015-05-02T08:00:00"
    },
    {
      "id": 12805,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "HC Elite 13U",
      "team1Id": 6418,
      "team2": "Team Dedication McNight 13U",
      "team2Id": 6416,
      "team1Score": "60",
      "team2Score": "19",
      "time": "2015-05-02T08:00:00"
    },
    {
      "id": 12807,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Lake Shore Elite 14U",
      "team1Id": 6420,
      "team2": "South Carroll B-ball 14U",
      "team2Id": 6423,
      "team1Score": "40",
      "team2Score": "34",
      "time": "2015-05-02T09:00:00"
    },
    {
      "id": 12876,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Bedlam Basketball 15U",
      "team1Id": 6435,
      "team2": "Ravens - Cross 15U",
      "team2Id": 6440,
      "team1Score": "48",
      "team2Score": "51",
      "time": "2015-05-02T09:00:00"
    },
    {
      "id": 12799,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Calvert Elite 12U",
      "team1Id": 6405,
      "team2": "Ravens - Miller 12U",
      "team2Id": 6403,
      "team1Score": "15",
      "team2Score": "44",
      "time": "2015-05-02T09:00:00"
    },
    {
      "id": 12810,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "DC Bulldogs 14U",
      "team1Id": 6424,
      "team2": "Team Dedication - Hale 14U",
      "team2Id": 6426,
      "team1Score": "30",
      "team2Score": "57",
      "time": "2015-05-02T09:00:00"
    },
    {
      "id": 12802,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "HC Elite White 12U",
      "team1Id": 6402,
      "team2": "MD Playmakers  Black 12U",
      "team2Id": 6407,
      "team1Score": "31",
      "team2Score": "32",
      "time": "2015-05-02T09:00:00"
    },
    {
      "id": 12813,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "HC Elite - Phillips 14U",
      "team1Id": 6431,
      "team2": "Mavs Select 14U",
      "team2Id": 6428,
      "team1Score": "37",
      "team2Score": "64",
      "time": "2015-05-02T10:00:00"
    },
    {
      "id": 12811,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "DC Premier 14U",
      "team1Id": 6427,
      "team2": "Mid Atlantic Select Mayers 14U",
      "team2Id": 6432,
      "team1Score": "52",
      "team2Score": "40",
      "time": "2015-05-02T10:00:00"
    },
    {
      "id": 12798,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "LBA Attack",
      "team1Id": 6395,
      "team2": "Liberty Road Ballers",
      "team2Id": 6404,
      "team1Score": "47",
      "team2Score": "7",
      "time": "2015-05-02T10:00:00"
    },
    {
      "id": 12809,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Mid-Penn Motion 13U",
      "team1Id": 6410,
      "team2": "Ravens Swartz 13U",
      "team2Id": 6411,
      "team1Score": "18",
      "team2Score": "37",
      "time": "2015-05-02T10:00:00"
    },
    {
      "id": 12803,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Carroll B-ball 13U",
      "team1Id": 6413,
      "team2": "WV Panthers 13U",
      "team2Id": 6417,
      "team1Score": "44",
      "team2Score": "16",
      "time": "2015-05-02T10:00:00"
    },
    {
      "id": 12817,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "MYBA Wildcats 15U",
      "team1Id": 6442,
      "team2": "Ravens - Cross 15U",
      "team2Id": 6440,
      "team1Score": "38",
      "team2Score": "51",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12816,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "BRYC Tarheels 15U",
      "team1Id": 6434,
      "team2": "WV Panthers 15U",
      "team2Id": 6443,
      "team1Score": "56",
      "team2Score": "36",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12814,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Carroll Bball - Selby 15u",
      "team1Id": 6438,
      "team2": "Team Dedication - Kirkland 15U",
      "team2Id": 6441,
      "team1Score": "39",
      "team2Score": "48",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12818,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "DMV Running Rebels 16U",
      "team1Id": 6450,
      "team2": "Westminster Scott Cole 16U",
      "team2Id": 6449,
      "team1Score": "54",
      "team2Score": "39",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12821,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "MD Playmakers - Black 16U",
      "team1Id": 6452,
      "team2": "Mid Atlantic Select 16U",
      "team2Id": 6454,
      "team1Score": "42",
      "team2Score": "29",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12820,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "HC Elite - Tringali 16U",
      "team1Id": 6445,
      "team2": "Urbana Hawks 16U",
      "team2Id": 6444,
      "team1Score": "52",
      "team2Score": "41",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12823,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "District Hoops 14U",
      "team1Id": 6429,
      "team2": "HC Elite - Hollwedel 14U",
      "team2Id": 6430,
      "team1Score": "36",
      "team2Score": "55",
      "time": "2015-05-02T11:00:00"
    },
    {
      "id": 12812,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "HC Elite Green 12U",
      "team1Id": 6401,
      "team2": "MD Playmakers  Black 12U",
      "team2Id": 6407,
      "team1Score": "39",
      "team2Score": "56",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12835,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Carroll B-ball 13U",
      "team1Id": 6413,
      "team2": "Team Dedication McNight 13U",
      "team2Id": 6416,
      "team1Score": "42",
      "team2Score": "22",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12824,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Ballerville DMV 9U",
      "team1Id": 6399,
      "team2": "Perry Hall Boys 9U",
      "team2Id": 6390,
      "team1Score": "23",
      "team2Score": "10",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12828,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Calvert Elite 12U",
      "team1Id": 6405,
      "team2": "Pikesville Panthers 12U",
      "team2Id": 6406,
      "team1Score": "11",
      "team2Score": "55",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12833,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Fairfax Stars 12U",
      "team1Id": 6409,
      "team2": "MD Playmakers Red 12U",
      "team2Id": 6408,
      "team1Score": "24",
      "team2Score": "55",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12822,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "HC Elite 98 White 17U",
      "team1Id": 6453,
      "team2": "LIONS 17U",
      "team2Id": 6456,
      "team1Score": "67",
      "team2Score": "61",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12834,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "All City Elite 13u",
      "team1Id": 6415,
      "team2": "WV Panthers 13U",
      "team2Id": 6417,
      "team1Score": "41",
      "team2Score": "23",
      "time": "2015-05-02T12:00:00"
    },
    {
      "id": 12837,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "HC Elite 13U",
      "team1Id": 6418,
      "team2": "Mid-Penn Motion 13U",
      "team2Id": 6410,
      "team1Score": "50",
      "team2Score": "13",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12836,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Cyclones 13U",
      "team1Id": 6414,
      "team2": "Ravens Swartz 13U",
      "team2Id": 6411,
      "team1Score": "34",
      "team2Score": "32",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12842,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Calvert Elite 14U",
      "team1Id": 6421,
      "team2": "Mid Atlantic Select Mayers 14U",
      "team2Id": 6432,
      "team1Score": "23",
      "team2Score": "45",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12841,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "DC Bulldogs 14U",
      "team1Id": 6424,
      "team2": "District Hoops 14U",
      "team2Id": 6429,
      "team1Score": "39",
      "team2Score": "50",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12838,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Columbia Ravens Chamblee 14U",
      "team1Id": 6422,
      "team2": "URBANA ELITE 14U",
      "team2Id": 6433,
      "team1Score": "54",
      "team2Score": "36",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12840,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "Columbia Ravens Held  14U",
      "team1Id": 6419,
      "team2": "Team Dedication - Hale 14U",
      "team2Id": 6426,
      "team1Score": "57",
      "team2Score": "51",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12940,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "HCYP Sharks",
      "team1Id": 6400,
      "team2": "Randallstown Runnin Rebels 11U",
      "team2Id": 6468,
      "team1Score": "25",
      "team2Score": "18",
      "time": "2015-05-02T13:00:00"
    },
    {
      "id": 12819,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "HC Elite - Thai 16U",
      "team1Id": 6447,
      "team2": "Ravens - Tucker 16U",
      "team2Id": 6448,
      "team1Score": "44",
      "team2Score": "41",
      "time": "2015-05-02T14:00:00"
    },
    {
      "id": 12808,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Gainesville Hurricanes",
      "team1Id": 6393,
      "team2": "MD Playmakers 11U",
      "team2Id": 6398,
      "team1Score": "26",
      "team2Score": "62",
      "time": "2015-05-02T14:00:00"
    },
    {
      "id": 12846,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "BRYC Tarheels 15U",
      "team1Id": 6434,
      "team2": "MYBA Wildcats 15U",
      "team2Id": 6442,
      "team1Score": "51",
      "team2Score": "47",
      "time": "2015-05-02T14:15:00"
    },
    {
      "id": 12847,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "Advanced Hoops 16U",
      "team1Id": 6446,
      "team2": "Westminster Scott Cole 16U",
      "team2Id": 6449,
      "team1Score": "46",
      "team2Score": "37",
      "time": "2015-05-02T14:15:00"
    },
    {
      "id": 12830,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Crofton B-ball",
      "team1Id": 6467,
      "team2": "MD Playmakers Red 12U",
      "team2Id": 6408,
      "team1Score": "17",
      "team2Score": "57",
      "time": "2015-05-02T14:15:00"
    },
    {
      "id": 12843,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "DC Premier 14U",
      "team1Id": 6427,
      "team2": "HC Elite - Phillips 14U",
      "team2Id": 6431,
      "team1Score": "58",
      "team2Score": "48",
      "time": "2015-05-02T14:15:00"
    },
    {
      "id": 12845,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Bethesda Bullets 15U",
      "team1Id": 6436,
      "team2": "Team Dedication - Kirkland 15U",
      "team2Id": 6441,
      "team1Score": "33",
      "team2Score": "69",
      "time": "2015-05-02T14:15:00"
    },
    {
      "id": 12827,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Randallstown Runnin Rebels 11U",
      "team1Id": 6468,
      "team2": "LBA Attack",
      "team2Id": 6395,
      "team1Score": "35",
      "team2Score": "36",
      "time": "2015-05-02T15:00:00"
    },
    {
      "id": 12815,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Iron Horse 15U",
      "team1Id": 6439,
      "team2": "Ravens  - Schubert 15U",
      "team2Id": 6437,
      "team1Score": "46",
      "team2Score": "29",
      "time": "2015-05-02T15:00:00"
    },
    {
      "id": 12861,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Pikesville Panthers 12U",
      "team1Id": 6406,
      "team2": "MD Playmakers  Black 12U",
      "team2Id": 6407,
      "team1Score": "44",
      "team2Score": "58",
      "time": "2015-05-02T15:15:00"
    },
    {
      "id": 12865,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "Fairfax Stars 12U",
      "team1Id": 6409,
      "team2": "Calvert Elite 12U",
      "team2Id": 6405,
      "team1Score": "29",
      "team2Score": "38",
      "time": "2015-05-02T15:15:00"
    },
    {
      "id": 12851,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "HC Elite - Tringali 16U",
      "team1Id": 6445,
      "team2": "MD Playmakers - Black 16U",
      "team2Id": 6452,
      "team1Score": "35",
      "team2Score": "34",
      "time": "2015-05-02T15:15:00"
    },
    {
      "id": 12869,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "URBANA ELITE 14U",
      "team1Id": 6433,
      "team2": "Lake Shore Elite 14U",
      "team2Id": 6420,
      "team1Score": "47",
      "team2Score": "41",
      "time": "2015-05-02T15:15:00"
    },
    {
      "id": 12849,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "HC Elite - Eudell 16U",
      "team1Id": 6451,
      "team2": "Urbana Hawks 16U",
      "team2Id": 6444,
      "team1Score": "42",
      "team2Score": "35",
      "time": "2015-05-02T15:15:00"
    },
    {
      "id": 12829,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Gainesville Hurricanes",
      "team1Id": 6393,
      "team2": "Liberty Road Ballers",
      "team2Id": 6404,
      "team1Score": "41",
      "team2Score": "16",
      "time": "2015-05-02T16:00:00"
    },
    {
      "id": 12797,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Gainesville  Elite",
      "team1Id": 6394,
      "team2": "Ravens - Conroy 11U",
      "team2Id": 6458,
      "team1Score": "42",
      "team2Score": "16",
      "time": "2015-05-02T16:00:00"
    },
    {
      "id": 12864,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "WV Panthers 13U",
      "team1Id": 6417,
      "team2": "Team Dedication McNight 13U",
      "team2Id": 6416,
      "team1Score": "27",
      "team2Score": "57",
      "time": "2015-05-02T16:15:00"
    },
    {
      "id": 12866,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "Carroll B-ball 13U",
      "team1Id": 6413,
      "team2": "Mid-Penn Motion 13U",
      "team2Id": 6410,
      "team1Score": "26",
      "team2Score": "28",
      "time": "2015-05-02T16:15:00"
    },
    {
      "id": 12848,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "DMV Running Rebels 16U",
      "team1Id": 6450,
      "team2": "HC Elite - Thai 16U",
      "team2Id": 6447,
      "team1Score": "30",
      "team2Score": "23",
      "time": "2015-05-02T16:15:00"
    },
    {
      "id": 12860,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "HC Elite Green 12U",
      "team1Id": 6401,
      "team2": "MD Playmakers Red 12U",
      "team2Id": 6408,
      "team1Score": "50",
      "team2Score": "53",
      "time": "2015-05-02T16:15:00"
    },
    {
      "id": 12863,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "All City Elite 13u",
      "team1Id": 6415,
      "team2": "WHC Force 13U",
      "team2Id": 6412,
      "team1Score": "30",
      "team2Score": "37",
      "time": "2015-05-02T16:15:00"
    },
    {
      "id": 12867,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Cyclones 13U",
      "team1Id": 6414,
      "team2": "HC Elite 13U",
      "team2Id": 6418,
      "team1Score": "22",
      "team2Score": "63",
      "time": "2015-05-02T17:00:00"
    },
    {
      "id": 12844,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Carroll Bball - Selby 15u",
      "team1Id": 6438,
      "team2": "Iron Horse 15U",
      "team2Id": 6439,
      "team1Score": "45",
      "team2Score": "41",
      "time": "2015-05-02T17:00:00"
    },
    {
      "id": 12872,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Calvert Elite 14U",
      "team1Id": 6421,
      "team2": "Mavs Select 14U",
      "team2Id": 6428,
      "team1Score": "17",
      "team2Score": "51",
      "time": "2015-05-02T17:15:00"
    },
    {
      "id": 12873,
      "location": "Bonnie Branch MS",
      "locationUrl": "http://goo.gl/mRkKqf",
      "locationId": 1027,
      "team1": "Mid Atlantic Select Mayers 14U",
      "team1Id": 6432,
      "team2": "HC Elite - Phillips 14U",
      "team2Id": 6431,
      "team1Score": "29",
      "team2Score": "34",
      "time": "2015-05-02T17:15:00"
    },
    {
      "id": 12871,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Team Dedication - Hale 14U",
      "team1Id": 6426,
      "team2": "District Hoops 14U",
      "team2Id": 6429,
      "team1Score": "61",
      "team2Score": "57",
      "time": "2015-05-02T17:15:00"
    },
    {
      "id": 12878,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "WV Panthers 15U",
      "team1Id": 6443,
      "team2": "Severn Elite",
      "team2Id": 6464,
      "team1Score": "18",
      "team2Score": "67",
      "time": "2015-05-02T17:15:00"
    },
    {
      "id": 12868,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Columbia Ravens Chamblee 14U",
      "team1Id": 6422,
      "team2": "South Carroll B-ball 14U",
      "team2Id": 6423,
      "team1Score": "43",
      "team2Score": "37",
      "time": "2015-05-02T17:15:00"
    },
    {
      "id": 12826,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Gainesville  Elite",
      "team1Id": 6394,
      "team2": "MD Playmakers 11U",
      "team2Id": 6398,
      "team1Score": "19",
      "team2Score": "61",
      "time": "2015-05-02T18:00:00"
    },
    {
      "id": 12825,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Baltimore Supreme 9U",
      "team1Id": 6391,
      "team2": "HCElite 9U",
      "team2Id": 6392,
      "team1Score": "25",
      "team2Score": "16",
      "time": "2015-05-02T18:00:00"
    },
    {
      "id": 12877,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Advanced Hoops 16U",
      "team1Id": 6446,
      "team2": "Ravens - Tucker 16U",
      "team2Id": 6448,
      "team1Score": "61",
      "team2Score": "58",
      "time": "2015-05-02T18:15:00"
    },
    {
      "id": 12801,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "HCYP Sharks",
      "team1Id": 6400,
      "team2": "MADE Basketball 11U",
      "team2Id": 6397,
      "team1Score": "25",
      "team2Score": "38",
      "time": "2015-05-02T18:15:00"
    },
    {
      "id": 12891,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Pikesville Panthers 12U",
      "team1Id": 6406,
      "team2": "HC Elite Green 12U",
      "team2Id": 6401,
      "team1Score": "34",
      "team2Score": "38",
      "time": "2015-05-02T18:15:00"
    },
    {
      "id": 12874,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Bethesda Bullets 15U",
      "team1Id": 6436,
      "team2": "Ravens  - Schubert 15U",
      "team2Id": 6437,
      "team1Score": "47",
      "team2Score": "75",
      "time": "2015-05-02T18:15:00"
    },
    {
      "id": 12879,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Westminster Scott Cole 16U",
      "team1Id": 6449,
      "team2": "HC Elite - Thai 16U",
      "team2Id": 6447,
      "team1Score": "57",
      "team2Score": "33",
      "time": "2015-05-02T19:00:00"
    },
    {
      "id": 12881,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "HC Elite - Eudell 16U",
      "team1Id": 6451,
      "team2": "Mid Atlantic Select 16U",
      "team2Id": 6454,
      "team1Score": "38",
      "team2Score": "43",
      "time": "2015-05-02T19:00:00"
    },
    {
      "id": 12893,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Ravens - Miller 12U",
      "team1Id": 6403,
      "team2": "Crofton B-ball",
      "team2Id": 6467,
      "team1Score": "55",
      "team2Score": "36",
      "time": "2015-05-02T19:15:00"
    },
    {
      "id": 12892,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Ravens - Conroy 11U",
      "team1Id": 6458,
      "team2": "Randallstown Runnin Rebels 11U",
      "team2Id": 6468,
      "team1Score": "27",
      "team2Score": "44",
      "time": "2015-05-02T19:15:00"
    },
    {
      "id": 12935,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "MYBA Wildcats 15U",
      "team1Id": 6442,
      "team2": "Severn Elite",
      "team2Id": 6464,
      "team1Score": "38",
      "team2Score": "47",
      "time": "2015-05-02T19:15:00"
    },
    {
      "id": 12884,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Baltimore Supreme 17U",
      "team1Id": 6459,
      "team2": "LIONS 17U",
      "team2Id": 6456,
      "team1Score": "40",
      "team2Score": "73",
      "time": "2015-05-02T19:15:00"
    },
    {
      "id": 12856,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Gainesville  Elite",
      "team1Id": 6394,
      "team2": "MADE Basketball 11U",
      "team2Id": 6397,
      "team1Score": "12",
      "team2Score": "40",
      "time": "2015-05-02T20:00:00"
    },
    {
      "id": 12853,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Ballerville DMV 9U",
      "team1Id": 6399,
      "team2": "HCElite 9U",
      "team2Id": 6392,
      "team1Score": "28",
      "team2Score": "21",
      "time": "2015-05-02T20:00:00"
    },
    {
      "id": 12857,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "MD Playmakers 11U",
      "team1Id": 6398,
      "team2": "Liberty Road Ballers",
      "team2Id": 6404,
      "team1Score": "56",
      "team2Score": "7",
      "time": "2015-05-02T20:15:00"
    },
    {
      "id": 12898,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "WHC Force 13U",
      "team1Id": 6412,
      "team2": "Ravens Swartz 13U",
      "team2Id": 6411,
      "team1Score": "34",
      "team2Score": "33",
      "time": "2015-05-02T20:15:00"
    },
    {
      "id": 12852,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Baltimore Supreme 17U",
      "team1Id": 6459,
      "team2": "Ravens - Ingersoll 17U",
      "team2Id": 6457,
      "team1Score": "",
      "team2Score": "",
      "time": "2015-05-03T08:00:00"
    },
    {
      "id": 12832,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "HC Elite Green 12U",
      "team1Id": 6401,
      "team2": "HC Elite White 12U",
      "team2Id": 6402,
      "team1Score": "54",
      "team2Score": "57",
      "time": "2015-05-03T08:00:00"
    },
    {
      "id": 12831,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Ravens - Conroy 11U",
      "team1Id": 6458,
      "team2": "MADE Basketball 11U",
      "team2Id": 6397,
      "team1Score": "14",
      "team2Score": "29",
      "time": "2015-05-03T08:00:00"
    },
    {
      "id": 12885,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Gainesville  Elite",
      "team1Id": 6394,
      "team2": "Liberty Road Ballers",
      "team2Id": 6404,
      "team1Score": "30",
      "team2Score": "16",
      "time": "2015-05-03T09:00:00"
    },
    {
      "id": 12888,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "MD Playmakers 11U",
      "team1Id": 6398,
      "team2": "HCYP Sharks",
      "team2Id": 6400,
      "team1Score": "29",
      "team2Score": "31",
      "time": "2015-05-03T09:00:00"
    },
    {
      "id": 12839,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Hoopmasters BC 14U",
      "team1Id": 6425,
      "team2": "Lake Shore Elite 14U",
      "team2Id": 6420,
      "team1Score": "41",
      "team2Score": "52",
      "time": "2015-05-03T09:00:00"
    },
    {
      "id": 12854,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Perry Hall Boys 9U",
      "team1Id": 6390,
      "team2": "Baltimore Supreme 9U",
      "team2Id": 6391,
      "team1Score": "15",
      "team2Score": "42",
      "time": "2015-05-03T09:00:00"
    },
    {
      "id": 12850,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Bedlam Basketball 15U",
      "team1Id": 6435,
      "team2": "WV Panthers 15U",
      "team2Id": 6443,
      "team1Score": "58",
      "team2Score": "18",
      "time": "2015-05-03T09:00:00"
    },
    {
      "id": 12875,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Team Dedication - Kirkland 15U",
      "team1Id": 6441,
      "team2": "Iron Horse 15U",
      "team2Id": 6439,
      "team1Score": "53",
      "team2Score": "39",
      "time": "2015-05-03T09:00:00"
    },
    {
      "id": 12900,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "HC Elite - Hollwedel 14U",
      "team1Id": 6430,
      "team2": "DC Bulldogs 14U",
      "team2Id": 6424,
      "team1Score": "53",
      "team2Score": "18",
      "time": "2015-05-03T10:00:00"
    },
    {
      "id": 12934,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "WHC Force 13U",
      "team1Id": 6412,
      "team2": "HC Elite 13U",
      "team2Id": 6418,
      "team1Score": "34",
      "team2Score": "48",
      "time": "2015-05-03T10:00:00"
    },
    {
      "id": 12895,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "WV Panthers 13U",
      "team1Id": 6417,
      "team2": "Mid-Penn Motion 13U",
      "team2Id": 6410,
      "team1Score": "17",
      "team2Score": "35",
      "time": "2015-05-03T10:00:00"
    },
    {
      "id": 12862,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Ravens - Miller 12U",
      "team1Id": 6403,
      "team2": "HC Elite White 12U",
      "team2Id": 6402,
      "team1Score": "36",
      "team2Score": "47",
      "time": "2015-05-03T10:00:00"
    },
    {
      "id": 12939,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Crofton B-ball",
      "team1Id": 6467,
      "team2": "Fairfax Stars 12U",
      "team2Id": 6409,
      "team1Score": "33",
      "team2Score": "28",
      "time": "2015-05-03T10:00:00"
    },
    {
      "id": 12896,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Carroll B-ball 13U",
      "team1Id": 6413,
      "team2": "Cyclones 13U",
      "team2Id": 6414,
      "team1Score": "35",
      "team2Score": "34",
      "time": "2015-05-03T10:00:00"
    },
    {
      "id": 12883,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Ballerville DMV 9U",
      "team1Id": 6399,
      "team2": "Baltimore Supreme 9U",
      "team2Id": 6391,
      "team1Score": "15",
      "team2Score": "34",
      "time": "2015-05-03T11:00:00"
    },
    {
      "id": 12902,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Mavs Select 14U",
      "team1Id": 6428,
      "team2": "DC Premier 14U",
      "team2Id": 6427,
      "team1Score": "46",
      "team2Score": "59",
      "time": "2015-05-03T11:00:00"
    },
    {
      "id": 12901,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Calvert Elite 14U",
      "team1Id": 6421,
      "team2": "HC Elite - Phillips 14U",
      "team2Id": 6431,
      "team1Score": "27",
      "team2Score": "54",
      "time": "2015-05-03T11:00:00"
    },
    {
      "id": 12858,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Ravens - Conroy 11U",
      "team1Id": 6458,
      "team2": "LBA Attack",
      "team2Id": 6395,
      "team1Score": "14",
      "team2Score": "52",
      "time": "2015-05-03T11:00:00"
    },
    {
      "id": 12925,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Ravens - Cross 15U",
      "team1Id": 6440,
      "team2": "WV Panthers 15U",
      "team2Id": 6443,
      "team1Score": "64",
      "team2Score": "22",
      "time": "2015-05-03T11:00:00"
    },
    {
      "id": 12899,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Columbia Ravens Held  14U",
      "team1Id": 6419,
      "team2": "District Hoops 14U",
      "team2Id": 6429,
      "team1Score": "51",
      "team2Score": "42",
      "time": "2015-05-03T11:00:00"
    },
    {
      "id": 12905,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Ravens  - Schubert 15U",
      "team1Id": 6437,
      "team2": "Carroll Bball - Selby 15u",
      "team2Id": 6438,
      "team1Score": "29",
      "team2Score": "38",
      "time": "2015-05-03T12:00:00"
    },
    {
      "id": 12904,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Bethesda Bullets 15U",
      "team1Id": 6436,
      "team2": "Iron Horse 15U",
      "team2Id": 6439,
      "team1Score": "33",
      "team2Score": "72",
      "time": "2015-05-03T12:00:00"
    },
    {
      "id": 12903,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Columbia Ravens Chamblee 14U",
      "team1Id": 6422,
      "team2": "Lake Shore Elite 14U",
      "team2Id": 6420,
      "team1Score": "35",
      "team2Score": "31",
      "time": "2015-05-03T12:00:00"
    },
    {
      "id": 12911,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "HC Elite - Eudell 16U",
      "team1Id": 6451,
      "team2": "MD Playmakers - Black 16U",
      "team2Id": 6452,
      "team1Score": "33",
      "team2Score": "47",
      "time": "2015-05-03T12:00:00"
    },
    {
      "id": 12908,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Advanced Hoops 16U",
      "team1Id": 6446,
      "team2": "HC Elite - Thai 16U",
      "team2Id": 6447,
      "team1Score": "54",
      "team2Score": "35",
      "time": "2015-05-03T12:00:00"
    },
    {
      "id": 12909,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Ravens - Tucker 16U",
      "team1Id": 6448,
      "team2": "DMV Running Rebels 16U",
      "team2Id": 6450,
      "team1Score": "50",
      "team2Score": "31",
      "time": "2015-05-03T12:00:00"
    },
    {
      "id": 12910,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Mid Atlantic Select 16U",
      "team1Id": 6454,
      "team2": "HC Elite - Tringali 16U",
      "team2Id": 6445,
      "team1Score": "24",
      "team2Score": "38",
      "time": "2015-05-03T13:00:00"
    },
    {
      "id": 12912,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Baltimore Supreme 17U",
      "team1Id": 6459,
      "team2": "HC Elite 98 White 17U",
      "team2Id": 6453,
      "team1Score": "",
      "team2Score": "",
      "time": "2015-05-03T13:00:00"
    },
    {
      "id": 12886,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "MADE Basketball 11U",
      "team1Id": 6397,
      "team2": "LBA Attack",
      "team2Id": 6395,
      "team1Score": "40",
      "team2Score": "33",
      "time": "2015-05-03T13:00:00"
    },
    {
      "id": 12887,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "HCElite 9U",
      "team1Id": 6392,
      "team2": "Perry Hall Boys 9U",
      "team2Id": 6390,
      "team1Score": "30",
      "team2Score": "10",
      "time": "2015-05-03T13:00:00"
    },
    {
      "id": 12906,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Bedlam Basketball 15U",
      "team1Id": 6435,
      "team2": "MYBA Wildcats 15U",
      "team2Id": 6442,
      "team1Score": "55",
      "team2Score": "45",
      "time": "2015-05-03T13:00:00"
    },
    {
      "id": 12907,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Severn Elite",
      "team1Id": 6464,
      "team2": "BRYC Tarheels 15U",
      "team2Id": 6434,
      "team1Score": "43",
      "team2Score": "33",
      "time": "2015-05-03T13:00:00"
    },
    {
      "id": 12800,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "Fairfax Stars 12U",
      "team1Id": 6409,
      "team2": "Pikesville Panthers 12U",
      "team2Id": 6406,
      "team1Score": "19",
      "team2Score": "37",
      "time": "2015-05-03T14:00:00"
    },
    {
      "id": 12859,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Gainesville Hurricanes",
      "team1Id": 6393,
      "team2": "HCYP Sharks",
      "team2Id": 6400,
      "team1Score": "29",
      "team2Score": "33",
      "time": "2015-05-03T14:00:00"
    },
    {
      "id": 12918,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Columbia Ravens Held  14U",
      "team1Id": 6419,
      "team2": "DC Bulldogs 14U",
      "team2Id": 6424,
      "team1Score": "50",
      "team2Score": "25",
      "time": "2015-05-03T14:15:00"
    },
    {
      "id": 12920,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "South Carroll B-ball 14U",
      "team1Id": 6423,
      "team2": "URBANA ELITE 14U",
      "team2Id": 6433,
      "team1Score": "39",
      "team2Score": "41",
      "time": "2015-05-03T14:15:00"
    },
    {
      "id": 12917,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Columbia Ravens Chamblee 14U",
      "team1Id": 6422,
      "team2": "Hoopmasters BC 14U",
      "team2Id": 6425,
      "team1Score": "44",
      "team2Score": "54",
      "time": "2015-05-03T14:15:00"
    },
    {
      "id": 12916,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "All City Elite 13u",
      "team1Id": 6415,
      "team2": "Ravens Swartz 13U",
      "team2Id": 6411,
      "team1Score": "32",
      "team2Score": "22",
      "time": "2015-05-03T14:15:00"
    },
    {
      "id": 12915,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "2nd Seed 9U",
      "team1Id": 6461,
      "team2": "3rd Seed 9U",
      "team2Id": 6462,
      "team1Score": "40",
      "team2Score": "42",
      "time": "2015-05-03T15:00:00"
    },
    {
      "id": 12914,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "1st Seed 9U",
      "team1Id": 6460,
      "team2": "4th Seed 9U",
      "team2Id": 6463,
      "team1Score": "33",
      "team2Score": "7",
      "time": "2015-05-03T15:00:00"
    },
    {
      "id": 12923,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Ravens  - Schubert 15U",
      "team1Id": 6437,
      "team2": "Team Dedication - Kirkland 15U",
      "team2Id": 6441,
      "team1Score": "33",
      "team2Score": "39",
      "time": "2015-05-03T15:15:00"
    },
    {
      "id": 12921,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Calvert Elite 14U",
      "team1Id": 6421,
      "team2": "DC Premier 14U",
      "team2Id": 6427,
      "team1Score": "24",
      "team2Score": "60",
      "time": "2015-05-03T15:15:00"
    },
    {
      "id": 12927,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Bethesda Bullets 15U",
      "team1Id": 6436,
      "team2": "Carroll Bball - Selby 15u",
      "team2Id": 6438,
      "team1Score": "24",
      "team2Score": "72",
      "time": "2015-05-03T15:15:00"
    },
    {
      "id": 12922,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Mavs Select 14U",
      "team1Id": 6428,
      "team2": "Mid Atlantic Select Mayers 14U",
      "team2Id": 6432,
      "team1Score": "58",
      "team2Score": "46",
      "time": "2015-05-03T15:15:00"
    },
    {
      "id": 12919,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "HC Elite - Hollwedel 14U",
      "team1Id": 6430,
      "team2": "Team Dedication - Hale 14U",
      "team2Id": 6426,
      "team1Score": "49",
      "team2Score": "37",
      "time": "2015-05-03T16:00:00"
    },
    {
      "id": 12924,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Bedlam Basketball 15U",
      "team1Id": 6435,
      "team2": "BRYC Tarheels 15U",
      "team2Id": 6434,
      "team1Score": "66",
      "team2Score": "33",
      "time": "2015-05-03T16:00:00"
    },
    {
      "id": 12926,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "Advanced Hoops 16U",
      "team1Id": 6446,
      "team2": "DMV Running Rebels 16U",
      "team2Id": 6450,
      "team1Score": "47",
      "team2Score": "24",
      "time": "2015-05-03T16:15:00"
    },
    {
      "id": 12941,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Randallstown Runnin Rebels 11U",
      "team1Id": 6468,
      "team2": "Gainesville Hurricanes",
      "team2Id": 6393,
      "team1Score": "35",
      "team2Score": "36",
      "time": "2015-05-03T16:15:00"
    },
    {
      "id": 12889,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Calvert Elite 12U",
      "team1Id": 6405,
      "team2": "MD Playmakers  Black 12U",
      "team2Id": 6407,
      "team1Score": "16",
      "team2Score": "52",
      "time": "2015-05-03T16:15:00"
    },
    {
      "id": 12936,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Severn Elite",
      "team1Id": 6464,
      "team2": "Ravens - Cross 15U",
      "team2Id": 6440,
      "team1Score": "41",
      "team2Score": "34",
      "time": "2015-05-03T16:15:00"
    },
    {
      "id": 12937,
      "location": "North Laurel Comm. Center Ct. 5",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1003,
      "team1": "Semi 1 v 4 Winner",
      "team1Id": 6465,
      "team2": "Semi 2 v 3 winner",
      "team2Id": 6466,
      "team1Score": "33",
      "team2Score": "37",
      "time": "2015-05-03T17:00:00"
    },
    {
      "id": 12929,
      "location": "North Laurel Comm. Center Ct. 6",
      "locationUrl": "http://goo.gl/maps/DlXFH",
      "locationId": 1011,
      "team1": "HC Elite - Eudell 16U",
      "team1Id": 6451,
      "team2": "HC Elite - Tringali 16U",
      "team2Id": 6445,
      "team1Score": "43",
      "team2Score": "32",
      "time": "2015-05-03T17:00:00"
    },
    {
      "id": 12880,
      "location": "Meadowbrook Ct. 4",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 6,
      "team1": "Urbana Hawks 16U",
      "team1Id": 6444,
      "team2": "MD Playmakers - Black 16U",
      "team2Id": 6452,
      "team1Score": "22",
      "team2Score": "46",
      "time": "2015-05-03T17:15:00"
    },
    {
      "id": 12932,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "LIONS 17U",
      "team1Id": 6456,
      "team2": "Ravens - Ingersoll 17U",
      "team2Id": 6457,
      "team1Score": "44",
      "team2Score": "69",
      "time": "2015-05-03T17:15:00"
    },
    {
      "id": 12931,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Baltimore Supreme 17U",
      "team1Id": 6459,
      "team2": "HC Elite 98 Green 17U",
      "team2Id": 6455,
      "team1Score": "",
      "team2Score": "",
      "time": "2015-05-03T17:15:00"
    },
    {
      "id": 12894,
      "location": "Meadowbrook Ct. 3",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 5,
      "team1": "All City Elite 13u",
      "team1Id": 6415,
      "team2": "Team Dedication McNight 13U",
      "team2Id": 6416,
      "team1Score": "33",
      "team2Score": "19",
      "time": "2015-05-03T17:15:00"
    }
  ],
  "standings": [
    {
      "divisionName": " 11U",
      "divisionStandings": [
        {
          "teamId": 6397,
          "teamName": "MADE Basketball 11U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 147,
          "pointsAgainst": 84,
          "pointsDiff": 63
        },
        {
          "teamId": 6398,
          "teamName": "MD Playmakers 11U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 208,
          "pointsAgainst": 83,
          "pointsDiff": 125
        },
        {
          "teamId": 6395,
          "teamName": "LBA Attack",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 168,
          "pointsAgainst": 96,
          "pointsDiff": 72
        },
        {
          "teamId": 6400,
          "teamName": "HCYP Sharks",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 114,
          "pointsAgainst": 114,
          "pointsDiff": 0
        },
        {
          "teamId": 6393,
          "teamName": "Gainesville Hurricanes",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 132,
          "pointsAgainst": 146,
          "pointsDiff": -14
        },
        {
          "teamId": 6394,
          "teamName": "Gainesville  Elite",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 103,
          "pointsAgainst": 133,
          "pointsDiff": -30
        },
        {
          "teamId": 6468,
          "teamName": "Randallstown Runnin Rebels 11U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 132,
          "pointsAgainst": 124,
          "pointsDiff": 8
        },
        {
          "teamId": 6458,
          "teamName": "Ravens - Conroy 11U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 71,
          "pointsAgainst": 167,
          "pointsDiff": -96
        },
        {
          "teamId": 6404,
          "teamName": "Liberty Road Ballers",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 46,
          "pointsAgainst": 174,
          "pointsDiff": -128
        }
      ]
    },
    {
      "divisionName": " 12U",
      "divisionStandings": [
        {
          "teamId": 6408,
          "teamName": "MD Playmakers Red 12U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 206,
          "pointsAgainst": 129,
          "pointsDiff": 77
        },
        {
          "teamId": 6407,
          "teamName": "MD Playmakers  Black 12U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 198,
          "pointsAgainst": 130,
          "pointsDiff": 68
        },
        {
          "teamId": 6402,
          "teamName": "HC Elite White 12U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 200,
          "pointsAgainst": 152,
          "pointsDiff": 48
        },
        {
          "teamId": 6406,
          "teamName": "Pikesville Panthers 12U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 170,
          "pointsAgainst": 126,
          "pointsDiff": 44
        },
        {
          "teamId": 6403,
          "teamName": "Ravens - Miller 12U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 173,
          "pointsAgainst": 139,
          "pointsDiff": 34
        },
        {
          "teamId": 6401,
          "teamName": "HC Elite Green 12U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 181,
          "pointsAgainst": 200,
          "pointsDiff": -19
        },
        {
          "teamId": 6467,
          "teamName": "Crofton B-ball",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 116,
          "pointsAgainst": 205,
          "pointsDiff": -89
        },
        {
          "teamId": 6405,
          "teamName": "Calvert Elite 12U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 80,
          "pointsAgainst": 180,
          "pointsDiff": -100
        },
        {
          "teamId": 6409,
          "teamName": "Fairfax Stars 12U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 100,
          "pointsAgainst": 163,
          "pointsDiff": -63
        }
      ]
    },
    {
      "divisionName": " 13U",
      "divisionStandings": [
        {
          "teamId": 6418,
          "teamName": "HC Elite 13U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 221,
          "pointsAgainst": 88,
          "pointsDiff": 133
        },
        {
          "teamId": 6413,
          "teamName": "Carroll B-ball 13U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 147,
          "pointsAgainst": 100,
          "pointsDiff": 47
        },
        {
          "teamId": 6415,
          "teamName": "All City Elite 13u",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 136,
          "pointsAgainst": 101,
          "pointsDiff": 35
        },
        {
          "teamId": 6412,
          "teamName": "WHC Force 13U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 145,
          "pointsAgainst": 161,
          "pointsDiff": -16
        },
        {
          "teamId": 6414,
          "teamName": "Cyclones 13U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 140,
          "pointsAgainst": 170,
          "pointsDiff": -30
        },
        {
          "teamId": 6410,
          "teamName": "Mid-Penn Motion 13U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 94,
          "pointsAgainst": 130,
          "pointsDiff": -36
        },
        {
          "teamId": 6411,
          "teamName": "Ravens Swartz 13U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 124,
          "pointsAgainst": 118,
          "pointsDiff": 6
        },
        {
          "teamId": 6416,
          "teamName": "Team Dedication McNight 13U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 117,
          "pointsAgainst": 162,
          "pointsDiff": -45
        },
        {
          "teamId": 6417,
          "teamName": "WV Panthers 13U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 83,
          "pointsAgainst": 177,
          "pointsDiff": -94
        }
      ]
    },
    {
      "divisionName": " 14U Black",
      "divisionStandings": [
        {
          "teamId": 6425,
          "teamName": "Hoopmasters BC 14U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 193,
          "pointsAgainst": 174,
          "pointsDiff": 19
        },
        {
          "teamId": 6422,
          "teamName": "Columbia Ravens Chamblee 14U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 176,
          "pointsAgainst": 158,
          "pointsDiff": 18
        },
        {
          "teamId": 6420,
          "teamName": "Lake Shore Elite 14U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 164,
          "pointsAgainst": 157,
          "pointsDiff": 7
        },
        {
          "teamId": 6433,
          "teamName": "URBANA ELITE 14U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 167,
          "pointsAgainst": 184,
          "pointsDiff": -17
        },
        {
          "teamId": 6423,
          "teamName": "South Carroll B-ball 14U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 145,
          "pointsAgainst": 172,
          "pointsDiff": -27
        }
      ]
    },
    {
      "divisionName": " 14U Green",
      "divisionStandings": [
        {
          "teamId": 6430,
          "teamName": "HC Elite - Hollwedel 14U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 191,
          "pointsAgainst": 122,
          "pointsDiff": 69
        },
        {
          "teamId": 6419,
          "teamName": "Columbia Ravens Held  14U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 189,
          "pointsAgainst": 152,
          "pointsDiff": 37
        },
        {
          "teamId": 6426,
          "teamName": "Team Dedication - Hale 14U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 206,
          "pointsAgainst": 193,
          "pointsDiff": 13
        },
        {
          "teamId": 6429,
          "teamName": "District Hoops 14U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 185,
          "pointsAgainst": 206,
          "pointsDiff": -21
        },
        {
          "teamId": 6424,
          "teamName": "DC Bulldogs 14U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 112,
          "pointsAgainst": 210,
          "pointsDiff": -98
        }
      ]
    },
    {
      "divisionName": " 14U White",
      "divisionStandings": [
        {
          "teamId": 6427,
          "teamName": "DC Premier 14U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 229,
          "pointsAgainst": 158,
          "pointsDiff": 71
        },
        {
          "teamId": 6428,
          "teamName": "Mavs Select 14U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 219,
          "pointsAgainst": 159,
          "pointsDiff": 60
        },
        {
          "teamId": 6431,
          "teamName": "HC Elite - Phillips 14U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 173,
          "pointsAgainst": 178,
          "pointsDiff": -5
        },
        {
          "teamId": 6432,
          "teamName": "Mid Atlantic Select Mayers 14U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 160,
          "pointsAgainst": 167,
          "pointsDiff": -7
        },
        {
          "teamId": 6421,
          "teamName": "Calvert Elite 14U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 91,
          "pointsAgainst": 210,
          "pointsDiff": -119
        }
      ]
    },
    {
      "divisionName": " 15U Green",
      "divisionStandings": [
        {
          "teamId": 6441,
          "teamName": "Team Dedication - Kirkland 15U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 209,
          "pointsAgainst": 144,
          "pointsDiff": 65
        },
        {
          "teamId": 6438,
          "teamName": "Carroll Bball - Selby 15u",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 194,
          "pointsAgainst": 142,
          "pointsDiff": 52
        },
        {
          "teamId": 6439,
          "teamName": "Iron Horse 15U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 198,
          "pointsAgainst": 160,
          "pointsDiff": 38
        },
        {
          "teamId": 6437,
          "teamName": "Ravens  - Schubert 15U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 166,
          "pointsAgainst": 170,
          "pointsDiff": -4
        },
        {
          "teamId": 6436,
          "teamName": "Bethesda Bullets 15U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 137,
          "pointsAgainst": 288,
          "pointsDiff": -151
        }
      ]
    },
    {
      "divisionName": " 15U White",
      "divisionStandings": [
        {
          "teamId": 6464,
          "teamName": "Severn Elite",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 198,
          "pointsAgainst": 123,
          "pointsDiff": 75
        },
        {
          "teamId": 6435,
          "teamName": "Bedlam Basketball 15U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 227,
          "pointsAgainst": 147,
          "pointsDiff": 80
        },
        {
          "teamId": 6440,
          "teamName": "Ravens - Cross 15U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 200,
          "pointsAgainst": 149,
          "pointsDiff": 51
        },
        {
          "teamId": 6434,
          "teamName": "BRYC Tarheels 15U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 173,
          "pointsAgainst": 192,
          "pointsDiff": -19
        },
        {
          "teamId": 6442,
          "teamName": "MYBA Wildcats 15U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 168,
          "pointsAgainst": 204,
          "pointsDiff": -36
        },
        {
          "teamId": 6443,
          "teamName": "WV Panthers 15U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 94,
          "pointsAgainst": 245,
          "pointsDiff": -151
        }
      ]
    },
    {
      "divisionName": " 16U  Green",
      "divisionStandings": [
        {
          "teamId": 6446,
          "teamName": "Advanced Hoops 16U",
          "wins": 4,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 208,
          "pointsAgainst": 154,
          "pointsDiff": 54
        },
        {
          "teamId": 6448,
          "teamName": "Ravens - Tucker 16U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 196,
          "pointsAgainst": 174,
          "pointsDiff": 22
        },
        {
          "teamId": 6450,
          "teamName": "DMV Running Rebels 16U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 139,
          "pointsAgainst": 159,
          "pointsDiff": -20
        },
        {
          "teamId": 6449,
          "teamName": "Westminster Scott Cole 16U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 171,
          "pointsAgainst": 180,
          "pointsDiff": -9
        },
        {
          "teamId": 6447,
          "teamName": "HC Elite - Thai 16U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 135,
          "pointsAgainst": 182,
          "pointsDiff": -47
        }
      ]
    },
    {
      "divisionName": " 16U White",
      "divisionStandings": [
        {
          "teamId": 6452,
          "teamName": "MD Playmakers - Black 16U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 169,
          "pointsAgainst": 119,
          "pointsDiff": 50
        },
        {
          "teamId": 6445,
          "teamName": "HC Elite - Tringali 16U",
          "wins": 3,
          "losses": 1,
          "winningPct": ".750",
          "pointsFor": 157,
          "pointsAgainst": 142,
          "pointsDiff": 15
        },
        {
          "teamId": 6451,
          "teamName": "HC Elite - Eudell 16U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 156,
          "pointsAgainst": 157,
          "pointsDiff": -1
        },
        {
          "teamId": 6454,
          "teamName": "Mid Atlantic Select 16U",
          "wins": 2,
          "losses": 2,
          "winningPct": ".500",
          "pointsFor": 143,
          "pointsAgainst": 152,
          "pointsDiff": -9
        },
        {
          "teamId": 6444,
          "teamName": "Urbana Hawks 16U",
          "wins": 0,
          "losses": 4,
          "winningPct": ".000",
          "pointsFor": 132,
          "pointsAgainst": 187,
          "pointsDiff": -55
        }
      ]
    },
    {
      "divisionName": " 17U",
      "divisionStandings": [
        {
          "teamId": 6455,
          "teamName": "HC Elite 98 Green 17U",
          "wins": 2,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 138,
          "pointsAgainst": 91,
          "pointsDiff": 47
        },
        {
          "teamId": 6457,
          "teamName": "Ravens - Ingersoll 17U",
          "wins": 2,
          "losses": 1,
          "winningPct": ".667",
          "pointsFor": 177,
          "pointsAgainst": 173,
          "pointsDiff": 4
        },
        {
          "teamId": 6453,
          "teamName": "HC Elite 98 White 17U",
          "wins": 1,
          "losses": 1,
          "winningPct": ".500",
          "pointsFor": 130,
          "pointsAgainst": 128,
          "pointsDiff": 2
        },
        {
          "teamId": 6456,
          "teamName": "LIONS 17U",
          "wins": 1,
          "losses": 3,
          "winningPct": ".250",
          "pointsFor": 228,
          "pointsAgainst": 248,
          "pointsDiff": -20
        },
        {
          "teamId": 6459,
          "teamName": "Baltimore Supreme 17U",
          "wins": 0,
          "losses": 1,
          "winningPct": ".000",
          "pointsFor": 40,
          "pointsAgainst": 73,
          "pointsDiff": -33
        }
      ]
    },
    {
      "divisionName": " 9U",
      "divisionStandings": [
        {
          "teamId": 6391,
          "teamName": "Baltimore Supreme 9U",
          "wins": 3,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 101,
          "pointsAgainst": 46,
          "pointsDiff": 55
        },
        {
          "teamId": 6460,
          "teamName": "1st Seed 9U",
          "wins": 1,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 33,
          "pointsAgainst": 7,
          "pointsDiff": 26
        },
        {
          "teamId": 6466,
          "teamName": "Semi 2 v 3 winner",
          "wins": 1,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 37,
          "pointsAgainst": 33,
          "pointsDiff": 4
        },
        {
          "teamId": 6462,
          "teamName": "3rd Seed 9U",
          "wins": 1,
          "losses": 0,
          "winningPct": "1.000",
          "pointsFor": 42,
          "pointsAgainst": 40,
          "pointsDiff": 2
        },
        {
          "teamId": 6399,
          "teamName": "Ballerville DMV 9U",
          "wins": 2,
          "losses": 1,
          "winningPct": ".667",
          "pointsFor": 66,
          "pointsAgainst": 65,
          "pointsDiff": 1
        },
        {
          "teamId": 6392,
          "teamName": "HCElite 9U",
          "wins": 1,
          "losses": 2,
          "winningPct": ".333",
          "pointsFor": 67,
          "pointsAgainst": 63,
          "pointsDiff": 4
        },
        {
          "teamId": 6461,
          "teamName": "2nd Seed 9U",
          "wins": 0,
          "losses": 1,
          "winningPct": ".000",
          "pointsFor": 40,
          "pointsAgainst": 42,
          "pointsDiff": -2
        },
        {
          "teamId": 6465,
          "teamName": "Semi 1 v 4 Winner",
          "wins": 0,
          "losses": 1,
          "winningPct": ".000",
          "pointsFor": 33,
          "pointsAgainst": 37,
          "pointsDiff": -4
        },
        {
          "teamId": 6463,
          "teamName": "4th Seed 9U",
          "wins": 0,
          "losses": 1,
          "winningPct": ".000",
          "pointsFor": 7,
          "pointsAgainst": 33,
          "pointsDiff": -26
        },
        {
          "teamId": 6390,
          "teamName": "Perry Hall Boys 9U",
          "wins": 0,
          "losses": 3,
          "winningPct": ".000",
          "pointsFor": 35,
          "pointsAgainst": 95,
          "pointsDiff": -60
        }
      ]
    }
  ]
};
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