import React, { useEffect, useState } from "react";
// import { useEffect } from "react-router-dom";
import { listDecks } from "../utils/api";
import Deck from "./Deck";

function Decks() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const decksFromAPI = await listDecks();
      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);
  console.log(decks);
  console.log("decks.length is", decks.length);

  if (decks.length > 0) {
    console.log("made it here in decks!");
    return (
      <div>
        {decks.map((deck, id) => {
          return <Deck deck={deck} />;
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
  return <p>Loading...</p>;
}

export default Decks;
