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
    <div class="card my-2">
      <div class="card-body container">
        <div class="row">
          <div class="col-md">
            <p>{card.front}</p>
          </div>
          <div class="col-md">
            <p>{card.back}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <Link
              className="btn btn-secondary mx-2"
              to={`${deckUrl}/cards/${card.id}/edit`}
            >
              Edit
            </Link>
          </div>
          <button onClick={clickDeleteHandler} className="btn btn-danger col-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
