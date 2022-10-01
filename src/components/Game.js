import React, { useState } from "react";
import Card from "./Card";
import IMAGES from "../images/images";

//creates cards
//checks logic
//updates highscore
const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <main className="main">
      <div className="scores">
        <p>Current Score: {score}</p>
        <p>High Score: {highScore}</p>
        <p>Highest possible score: {IMAGES.length}</p>
      </div>
      <div className="card-wrapper">
        {IMAGES.map((character) => (
          <Card
            key={character.name}
            src={character.src}
            name={character.name}
          />
        ))}
      </div>
    </main>
  );
};

export default Game;
