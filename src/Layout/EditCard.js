import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BreadCrumbHeader from "./BreadCrumbHeader";

function EditCard({ deck }) {
  const { deckId, cardId } = useParams();
  const { url, path } = useRouteMatch();
  console.log("EditCard params is", deckId, cardId);
  console.log("EditCard deck is", deck);
  const cardMatch = deck.cards.filter((card) => {
    console.log("card in filter iter is", card);
    console.log("card.id is", card.id);
    console.log("cardId is", cardId);
    console.log("parseInt(cardId) is", parseInt(cardId));
    return card.id === parseInt(cardId);
  });
  console.log("editcard card filter is", cardMatch);
  console.log("cardMatch[0] is", cardMatch[0]);
  return (
    <React.Fragment>
      <BreadCrumbHeader deck={deck} card={cardMatch[0]} />
      <p>Placeholder in EditCard!</p>
    </React.Fragment>
  );
}

export default EditCard;
