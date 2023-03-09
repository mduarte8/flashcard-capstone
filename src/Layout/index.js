import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";
import BreadCrumbHeader from "./BreadCrumbHeader";
import Deck from "./Deck.js";

function Layout() {
  const { url, path } = useRouteMatch();

  // const loadDeck = async () => {
  //   const deckFromAPI = await readDeck(deckId);
  //   console.log("deckfromapi is", deckFromAPI);
  //   setDeck(deckFromAPI);
  // };

  // async function deleteDeckHandler(deckIdToDelete) {
  //   await deleteCard(deckIdToDelete);
  //   await loadDeck();
  // }

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
            <Decks />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
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
