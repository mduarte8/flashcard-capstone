import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import BreadCrumbHeader from "./BreadCrumbHeader";
import Card from "./Card";

function Deck() {
  const { url, path } = useRouteMatch();
  const { deckId } = useParams();
  console.log("deckId is", deckId);

  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function loadDeck() {
      const deckFromAPI = await readDeck(deckId);
      console.log("deckfromapi is", deckFromAPI);
      setDeck(deckFromAPI);
    }
    loadDeck();
  }, []);
  console.log("IN DECK DECK IS", deck);

  console.log("deck url is", url);
  console.log("deck path is", path);
  if (Object.keys(deck).length > 0) {
    return (
      <React.Fragment>
        <BreadCrumbHeader />
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{deck.name}</h4>
            <p className="card-text">{deck.description}</p>
            <Link className="btn btn-secondary">Edit</Link>
            {/* NEED TO UPDATE THIS LINK */}
            <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
              Study
            </Link>
            <Link
              className="btn btn-primary"
              to={`/decks/${deck.id}/cards/new`}
            >
              Add Cards
            </Link>
            <Link className="btn btn-danger" to="/">
              Delete
            </Link>
          </div>
          {deck.cards.map((card) => {
            return <Card card={card} deckUrl={url} />;
          })}
        </div>
      </React.Fragment>
    );
  }
  return <p>Loading........ In Deck!</p>;
}

export default Deck;
