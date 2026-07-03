import { useState } from "react";
import "./App.css";
import ScoreBoard from "./Component/Scoreboard";
import Buttons from "./Component/Buttons";

function App() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);

  const hitBall = () => {
    if (balls >= 6) return;

    const randomRuns = [0, 1, 2, 4, 6];
    const run =
      randomRuns[Math.floor(Math.random() * randomRuns.length)];

    setRuns((prev) => prev + run);
    setBalls((prev) => prev + 1);
  };

  const resetGame = () => {
    setBalls(0);
    setRuns(0);
  };

  return (
    <div className="container">
      <ScoreBoard balls={balls} runs={runs} />

      <Buttons
        balls={balls}
        hitBall={hitBall}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;