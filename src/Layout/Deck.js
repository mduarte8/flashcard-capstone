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
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";

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

  console.log("deck url is:::", url);
  console.log("deck path is:::", path);
  if (Object.keys(deck).length > 0) {
    return (
      <React.Fragment>
        <BreadCrumbHeader path={path} />
        <Switch>
          <Route exact path={path}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{deck.name}</h4>
                <p className="card-text">{deck.description}</p>
                <Link className="btn btn-secondary" to={`${url}/edit`}>
                  Edit
                </Link>
                {/* NEED TO UPDATE THIS LINK */}
                <Link className="btn btn-primary" to={`${url}/study`}>
                  Study
                </Link>
                <Link className="btn btn-primary" to={`${url}/cards/new`}>
                  Add Cards
                </Link>
                <button className="btn btn-danger">Delete</button>
              </div>
              {deck.cards.map((card) => {
                return <Card card={card} deckUrl={url} />;
              })}
            </div>
          </Route>
          <Route path={`${path}/study`}>
            <StudyDeck deck={deck} />
            {/* <p>Poop!</p> */}
          </Route>
          <Route path={`${path}/edit`}>
            <EditDeck deck={deck} />
          </Route>
          <Route exact path={`${path}/delete`}>
            {/* {window.confirm("Delete this card? NO FUNCTIONING YET") && (
              <p>Delete place</p>
            )} */}
          </Route>
          <Route>
            <AddCard />
          </Route>
          <Route>
            <EditCard />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
  return <p>Loading........ In Deck!</p>;
}

export default Deck;
