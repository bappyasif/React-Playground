import React from "react";

function Character({ characterName }) {
  if (characterName === "Joker") {
    throw new Error("Not A Hero Character");
  }
  return (
    <div>
      <h4>{characterName}</h4>
    </div>
  );
}

export default Character;
