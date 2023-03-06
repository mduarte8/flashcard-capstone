import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new">
              <div type="button" className="btn btn-primary">
                +Create Deck
              </div>
            </Link>
            <Decks />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
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
