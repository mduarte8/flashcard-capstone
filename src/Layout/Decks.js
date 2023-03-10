import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import DeckLink from "./DeckLink";

function Decks({ deleteDeckHandler }) {
  const [decks, setDecks] = useState([]);

  async function deleteDeck(deckIdToDelete) {
    await deleteDeckHandler(deckIdToDelete);
  }
  async function loadDecks() {
    const decksFromAPI = await listDecks();
    setDecks(decksFromAPI);
  }

  useEffect(() => {
    loadDecks();
  }, []);

  if (decks.length > 0) {
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
  }
  return <h1>No Decks To Display!</h1>;
}

export default Decks;
