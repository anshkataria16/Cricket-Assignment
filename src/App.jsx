import { useState } from "react";
import "./App.css";

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
      <div className="scoreboard">
        <h1>Cricket Score Board</h1>

        <h2>Balls : {balls}</h2>

        <h2>Runs : {runs}</h2>
      </div>

      <p className="text">
        You get total of 6 balls (1 over). The button gets disabled after that
      </p>

      <div className="buttons">
        <button onClick={hitBall} disabled={balls === 6}>
          Click to hit the ball
        </button>

        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;