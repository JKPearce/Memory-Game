import React from "react";

const Card = ({ src, name, checkWin }) => {
  return (
    <div className="card" onClick={checkWin} id={name}>
      <img src={src} alt={name + " from the Overwatch videogame"} />
      <div className="info">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
