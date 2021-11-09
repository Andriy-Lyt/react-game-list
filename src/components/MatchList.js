import React from 'react'; //optional
import Match from './Match';

function MatchList(props) {
  const matches = props.matchData.map((match) => {
    // console.log("match = ", match);
    return (
      <Match
        key={match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  });

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;