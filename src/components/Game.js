import React, { useState, useEffect } from "react";
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
  const [images, setImages] = useState(IMAGES);

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
    shuffle();
  }

  function reset() {
    setScore(0);
    addClickedItem([]);
    shuffle();
  }

  function shuffle() {
    let m = images.length,
      t,
      i,
      tempArray = images;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = tempArray[m];
      tempArray[m] = tempArray[i];
      tempArray[i] = t;
    }
    setImages(tempArray);
  }

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <main className="main">
      <Scores score={score} highScore={highScore} total={images.length} />
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
