function gameObject() {
    const gameObject = {
        "home" : {
            "teamName" : "Brooklyn Nets",
            "colors" : ["Black", "White"],
            "players" : {
                "Alan Anderson" : {
                    "number" : 0,
                    "shoe" : 16,
                    "points" : 22,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 1
                },
                "Reggie Evans" : {
                    "number" : 30,
                    "shoe" : 14,
                    "points" : 12,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 12,
                    "blocks" : 12,
                    "slamDunks" : 7
                },
                "Brook Lopez" : {
                    "number" : 11,
                    "shoe" : 17,
                    "points" : 17,
                    "rebounds" : 19,
                    "assists" : 10,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15
                },
                "Mason Plumlee" : {
                    "number" : 1,
                    "shoe" : 19,
                    "points" : 26,
                    "rebounds" : 12,
                    "assists" : 6,
                    "steals" : 3,
                    "blocks" : 8,
                    "slamDunks" : 5
                },
                "Jason Terry" : {
                    "number" : 31,
                    "shoe" : 15,
                    "points" : 19,
                    "rebounds" : 2,
                    "assists" : 2,
                    "steals" : 4,
                    "blocks" : 11,
                    "slamDunks" : 1
                }
            }
        },
        "away" : {
            "teamName" : "Charlotte Hornets",
            "colors" : ["Turquoise", "Purple"],
            "players" :  {
                "Jeff Adrien" : {
                    "number" : 4,
                    "shoe" : 18,
                    "points" : 10,
                    "rebounds" : 1,
                    "assists" : 1,
                    "steals" : 2,
                    "blocks" : 7,
                    "slamDunks" : 2
                },
                "Bismak Biyombo" : {
                    "number" : 0,
                    "shoe" : 16,
                    "points" : 12,
                    "rebounds" : 4,
                    "assists" : 7,
                    "steals" : 7,
                    "blocks" : 15,
                    "slamDunks" : 10
                },
                "DeSagna Diop" : {
                    "number" : 2,
                    "shoe" : 14,
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamDunks" : 5
                },
                "Ben Gordon" : {
                    "number" : 8,
                    "shoe" : 15,
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamDunks" : 0
                },
                "Brendan Haywood" : {
                    "number" : 33,
                    "shoe" : 15,
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12
                }
            }
        }
    }
    return gameObject
}





// HELPER FUNCTIONS(start)
function getPlayers() {
    const homePlayers = gameObject()["home"]["players"]
    const awayPlayers = gameObject()["away"]["players"]
    return Object.assign({}, homePlayers, awayPlayers)
}
// ↕️
function players() {
    const homePlayers = gameObject()["home"]["players"]
    const awayPlayers = gameObject()["away"]["players"]
    return Object.assign([], homePlayers, awayPlayers)
}
// ↕️
function getPlayer(playerName) {
    const players = getPlayers()
    return players[playerName]
}
// ↕️
function getTeamByName(teamName) {
    return gameObject().home.teamName === teamName
    ? gameObject().home
    : gameObject().away
}
// ↕️
function teams() {
    return Object.values(gameObject())
}
// ↕️
function getPlayersStats() {
    return Object.values(getPlayers())
}
// HELPER FUNCTIONS(end)





// FUNCTION:  numPointsScored
function numPointsScored(playerName) {
    return getPlayer(playerName).points
}



// FUNCTION:  shoeSize
function shoeSize(playerName) {
    return getPlayer(playerName).shoe
}



// FUNCTION:  getTeamColors
function getTeamColors(teamName) {
    return getTeamByName(teamName).colors
}



// FUNCTION:  teamNames
function teamNames() {
    return teams().map(team => team.teamName)
}



// FUNCTION:  playerNumbers
function playerNumbers(teamName) {
    const result = teams().find(team => team.teamName === teamName).players
    return Object.values(result).map(player => player.number)
}



// FUNCTION:  playerStats
function playerStats(playerName) {
    return getPlayer(playerName)
}



// FUNCTION:  bigShoeRebounds
function bigShoeRebounds() {
    return getPlayersStats().reduce((biggestPlayer, currentPlayer) => {
        if (currentPlayer.shoe > biggestPlayer.shoe) {
            return currentPlayer
        } else {
            return biggestPlayer
    }
}).rebounds
}





// **Bonus Questions:**

// 1. Which player has the most points? Call the function `mostPointsScored`.
function mostPointsScored() {
    const bigPoints = getPlayersStats().reduce((biggestPlayer, currentPlayer) => {
        if (currentPlayer.points > biggestPlayer.points) {
            return currentPlayer
        } else {
            return biggestPlayer
        }
    }).points
    const players = Object.keys(getPlayers())
    const points = Object.values(getPlayers()).map( player => player.points )
    let index = points.findIndex(rank => rank === bigPoints)
    return players[index]
}



// 2. Which team has the most points? Call the function `winningTeam`.
function winningTeam() {
    const homeStats = Object.values(gameObject()["home"]["players"])
    const awayStats = Object.values(gameObject()["away"]["players"])
    const homePoints = homeStats.reduce(function(prev, cur) {
        return prev + cur.points;
      }, 0);
    const awayPoints = awayStats.reduce(function(prev, cur) {
    return prev + cur.points;
    }, 0); 
    awayPoints > homePoints 
    ? team = Object.values(gameObject()["away"]).shift()
    : team = Object.values(gameObject()["home"]).shift()
    return team
}



// 3. Which player has the longest name? Call the function `playerWithLongestName`.
function playerWithLongestName() {
    const namesOfPlayers = Object.keys(getPlayers())
    return namesOfPlayers.reduce(function (a, b) { return a.length > b.length ? a : b; })
}





// **Super Bonus:**

// 1. Write a function that returns true if the player with the longest name had
//    the most steals. Call the function `doesLongNameStealATon`.
function doesLongNameStealATon() {
    const bigSteals = getPlayersStats().reduce((biggestPlayer, currentPlayer) => {
        if (currentPlayer.steals > biggestPlayer.steals) {
            return currentPlayer
        } else {
            return biggestPlayer
        }
    }).steals
    const players = Object.keys(getPlayers())
    const steals = Object.values(getPlayers()).map( player => player.steals )
    let index = steals.findIndex(rank => rank === bigSteals)
    const bigStealsPlayer = players[index]
    if (bigStealsPlayer === playerWithLongestName()) {
        return true
    } else {
        return false
    }

}
