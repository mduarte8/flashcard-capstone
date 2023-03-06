import React from "react";

function Deck({ deck }) {
  console.log("in deck", deck);
  return (
    <div>
      <p>
        {deck.id} {deck.name}
      </p>
    </div>
  );
}

export default Deck;
