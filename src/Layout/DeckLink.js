import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { listDecks } from "../utils/api";

function DeckLink({ deck, id, deleteDeck, loadDecks }) {
  // console.log("in deck", deck);
  const { url, path } = useRouteMatch();
  // console.log("Deck", deck.id, "url is", url);
  const history = useHistory();
  console.log("decklink load decks is", loadDecks);

  console.log("decklink deletedeckh is", deleteDeck);

  const handleDeleteDeck = async (event) => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      await deleteDeck(deck.id);
      await loadDecks();
    }
  };

  return (
    <div className="card">
      <div className="card-body container">
        <h4 className="card-title">{deck.name}</h4>{" "}
        <span>{deck.cards.length} cards</span>
        <p className="card-text">{deck.description}</p>
        <div class="row">
          <div class="col-10">
            <Link className="btn btn-secondary mx-2" to={`/decks/${deck.id}`}>
              View
            </Link>
            <Link
              className="btn btn-primary mx-2"
              to={`/decks/${deck.id}/study`}
            >
              Study
            </Link>
          </div>
          <button className="btn btn-danger col-2 " onClick={handleDeleteDeck}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckLink;
