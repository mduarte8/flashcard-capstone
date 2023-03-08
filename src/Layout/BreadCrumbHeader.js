import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function BreadCrumbHeader({ deck = {}, card = { id: -99 } }) {
  const params = useParams();
  const { url, path } = useRouteMatch();
  console.log("breadcrumbheader params are", params);
  console.log("breadcrumbheader path is", path);
  console.log("bch card.id is", card.id);

  return (
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link>

        {url === "/decks/new" ? (
          <span> / Create Deck </span>
        ) : url.includes("/study") ? (
          <React.Fragment>
            <span> / </span>
            <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "}
            <span> / Study</span>{" "}
          </React.Fragment>
        ) : path.includes("/:deckId/edit") ? (
          <React.Fragment>
            <span> / </span>
            <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "}
            <span> / Edit Deck</span>{" "}
          </React.Fragment>
        ) : url.includes("/cards/new") ? (
          <React.Fragment>
            <span> / </span>
            <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "}
            <span> / Add Card</span>{" "}
          </React.Fragment>
        ) : path.includes("/:cardId/edit") ? (
          <React.Fragment>
            <span> / </span>
            <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "}
            <span> / Edit Card {params.cardId} </span>{" "}
          </React.Fragment>
        ) : (
          <span> / {deck.name}</span>
        )}
      </nav>
    </React.Fragment>
  );
}

export default BreadCrumbHeader;
