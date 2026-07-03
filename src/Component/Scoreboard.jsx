function ScoreBoard({ balls, runs }) {
  return (
    <>
      <div className="scoreboard">
        <h1>Cricket Score Board</h1>

        <h2>Balls : {balls}</h2>

        <h2>Runs : {runs}</h2>
      </div>

      <p className="text">
        You get total of 6 balls (1 over). The button gets disabled after that.
      </p>
    </>
  );
}

export default ScoreBoard;