import React, { useState } from "react";
import Card from "./Card";
import Scores from "./Scores";
import IMAGES from "../images/images";

//creates cards
//checks logic
//updates highscore
const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <main className="main">
      <Scores score={score} highScore={highScore} total={IMAGES.length} />
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
