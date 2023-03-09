import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";
import BreadCrumbHeader from "./BreadCrumbHeader";
import Deck from "./Deck.js";
import { deleteDeck, listDecks } from "../utils/api";

function Layout() {
  const { url, path } = useRouteMatch();

  // const loadDeck = async () => {
  //   const deckFromAPI = await readDeck(deckId);
  //   console.log("deckfromapi is", deckFromAPI);
  //   setDeck(deckFromAPI);
  // };

  async function deleteDeckHandler(deckIdToDelete) {
    await deleteDeck(deckIdToDelete);
    listDecks();
  }

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <BreadCrumbHeader path={path} />
            <Link className="btn btn-primary" to="/decks/new">
              +Create Deck
            </Link>
            <Decks deleteDeckHandler={deleteDeckHandler} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck deleteDeckHandler={deleteDeckHandler} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
