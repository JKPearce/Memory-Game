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
  const [clickedArray, addClickedItem] = useState([]);

  function checkWin(e) {
    const target = e.currentTarget.id;

    if (clickedArray.includes(target)) {
      console.log("Lose");
      if (score > highScore) setHighScore(score);
      reset();
      return;
    }

    addClickedItem((prevState) => [...prevState, target]);
    setScore(score + 1);
  }

  function reset() {
    setScore(0);
    addClickedItem([]);
  }

  return (
    <main className="main">
      <Scores score={score} highScore={highScore} total={IMAGES.length} />
      <div className="card-wrapper">
        {IMAGES.map((character) => (
          <Card
            key={character.name}
            src={character.src}
            name={character.name}
            checkWin={checkWin}
          />
        ))}
      </div>
    </main>
  );
};

export default Game;
