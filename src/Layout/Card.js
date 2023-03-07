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

function Card({ card, deckUrl, deleteCardHandler }) {
  const clickDeleteHandler = (event) => {
    if (window.confirm("Are you sure you want to delete card?")) {
      deleteCardHandler(card.id);
    }
  };
  return (
    <div>
      <p>
        {card.id}, {card.front}, {card.back}
      </p>
      <Link
        className="btn btn-secondary"
        to={`${deckUrl}/cards/${card.id}/edit`}
      >
        Edit
      </Link>
      <button onClick={clickDeleteHandler} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

export default Card;
