import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

function DeckLink({ deck }) {
  // console.log("in deck", deck);
  const { url, path } = useRouteMatch();
  // console.log("Deck", deck.id, "url is", url);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{deck.name}</h4>
        <p className="card-text">{deck.description}</p>
        <Link className="btn btn-secondary" to={`/decks/${deck.id}`}>
          View
        </Link>
        <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
          Study
        </Link>
        <Link className="btn btn-danger" to="/">
          Delete
        </Link>
      </div>
    </div>
  );
}

export default DeckLink;
