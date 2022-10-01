import React from "react";

const Card = ({ src, name }) => {
  return (
    <div className="card">
      <img src={src} alt={name + " from the Overwatch videogame"} />
      <div className="info">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
