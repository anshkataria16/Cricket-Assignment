function Buttons({ balls, hitBall, resetGame }) {
  return (
    <div className="buttons">
      <button onClick={hitBall} disabled={balls === 6}>
        Click to hit the ball
      </button>

      <button onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Buttons;