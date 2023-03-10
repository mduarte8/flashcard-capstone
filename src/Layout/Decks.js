import React, { useEffect, useState } from "react";
import { Link, Route, Swtich } from "react-router-dom";
// import { useEffect } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckLink from "./DeckLink";

function Decks({ deleteDeckHandler }) {
  const [decks, setDecks] = useState([]);

  console.log("Decks deleteDeckHandler is", deleteDeckHandler);

  async function deleteDeck(deckIdToDelete) {
    await deleteDeckHandler(deckIdToDelete);
  }
  async function loadDecks() {
    const decksFromAPI = await listDecks();
    console.log("decks from Api are", decksFromAPI);
    setDecks(decksFromAPI);
  }

  useEffect(() => {
    loadDecks();
  }, []);
  console.log(decks);
  console.log("decks.length is", decks.length);
  console.log("Decks loadDecks is", loadDecks);

  if (decks.length > 0) {
    console.log("made it here in decks!");
    return (
      <div>
        {decks.map((deck, id) => {
          return (
            <DeckLink
              deck={deck}
              key={id}
              deleteDeck={deleteDeck}
              loadDecks={loadDecks}
            />
          );
        })}
      </div>
    );
    // return (
    //   <div>
    //     {decks.map((deck, index) => {
    //       <div>
    //         <p>boop</p>
    //         {/* <Deck deck={deck} />; */}
    //       </div>;
    //     })}
    //     <p>PLACEHOLDER FOR ALL THE DECKS</p>
    //   </div>
    // );
  }
  return <h1>No Decks To Display!</h1>;
}

export default Decks;
