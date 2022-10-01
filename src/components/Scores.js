import React from "react";

const Scores = ({ score, highScore, total }) => {
  return (
    <div className="scores">
      <p>Current Score: {score}</p>
      <p>High Score: {highScore}</p>
      <p>Highest possible score: {total}</p>
    </div>
  );
};

export default Scores;
