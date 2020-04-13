//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeTeam] = useState("Lions");
  const [awayTeam] = useState("Tigers");
  const [quarter, setQuarter] = useState(1);

  const scorePoints = (points, teamName) => {
    if(teamName === homeTeam) {
      return setHomeScore(homeScore + points);
    } else if(teamName === awayTeam) {
      return setAwayScore(awayScore + points);
    } else {
      return console.error("incorrect team name passed.");
    }
  }

  const initGame = () => {
    setHomeScore(0);
    setAwayScore(0);
    return setQuarter(1);
  }

  const endGame = () => {
    if(homeScore > awayScore) {
      return `${homeTeam} wins ${homeScore} to ${awayScore}!`;
    } else if(awayScore > homeScore) {
      return `${awayTeam} wins ${awayScore} to ${homeScore}!`;
    } else {
      return "It's a tie!";
    }
  }

  useEffect(() => {
    if(quarter > 4) {
      const endGameMessage = endGame();
      alert(endGameMessage);

      return initGame();
    }
  }, [quarter]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
          <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => scorePoints(7, homeTeam)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => scorePoints(3, homeTeam)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => scorePoints(7, awayTeam)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => scorePoints(3, awayTeam)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>

        <button onClick={() => setQuarter(quarter + 1)}>Next Quarter</button>
      </section>
    </div>
  );
}

export default App;
