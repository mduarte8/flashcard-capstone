import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";
import BreadCrumbHeader from "./BreadCrumbHeader";

function Layout() {
  const { url, path } = useRouteMatch();

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <BreadCrumbHeader path={path} />
            <Link to="/decks/new">
              <div type="button" className="btn btn-primary">
                +Create Deck
              </div>
            </Link>
            <p>grr on homepage</p>
            <Decks />
            <p>decks should be above this</p>
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
