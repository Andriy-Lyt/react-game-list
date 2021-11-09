export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

// input: playerDataArray, matchData
export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}
// output: [{player}, {player}] (each player having a win key and a numerical value)


/* no map and reduce solution:
const winnersArF = (matchData) => {
  const winnersAr = [];
  for(let key in matchData) {
      winnersAr.push(matchData[key].winner);
  }
  return winnersAr;
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
const winnersAr = winnersArF(matchData);

for(let winnerName of winnersAr) {
  playerDataArray[winnerName].win ? playerDataArray[winnerName].win += 1 : 1;
}

} */