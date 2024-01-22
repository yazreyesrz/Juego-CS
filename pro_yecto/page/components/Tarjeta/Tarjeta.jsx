import React from "react";
import "./Tarjeta.css";

const Card = ({ card, onClick, flipped }) => (
  <div
    className={`card ${flipped ? "flipped" : ""} ${
      card.matched ? "matched" : ""
    }`}
    onClick={() => onClick(card.id)}
  >
    {flipped && !card.matched && (
      <img
        src={card.image}
        alt={`Card ${card.id}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    )}
  </div>
);

export default Card;
