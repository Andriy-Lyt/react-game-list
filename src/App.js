import './App.css';
import React, { useState } from "react";
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';


function App() {
  // console.log("matchData = ", matchData); 
  const [count, setCount] = useState(0);

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);  

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList playerData={parsedPlayerData}/>
      <MatchList matchData={matchData}/>
      <br />
      <main>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h1>Button was clicked {count} times.</h1>
    </main>

    </div>

  );
}
export default App;
