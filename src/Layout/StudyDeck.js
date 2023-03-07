import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BreadCrumbHeader from "./BreadCrumbHeader";

function StudyDeck({ deck }) {
  const { url, path } = useRouteMatch();
  const { params } = useParams();
  const history = useHistory();

  console.log("deck is", deck);
  console.log("deck.cards.length is", deck.cards.length);

  const [nextCounter, setNextCounter] = useState(0);
  const [frontCard, setFrontCard] = useState(true);
  const [showNext, setShowNext] = useState(false);

  const nextHandler = (event) => {
    event.preventDefault();
    if (nextCounter < deck.cards.length - 1) {
      setNextCounter(nextCounter + 1);
      setShowNext(false);
      setFrontCard(true);
    } else if (window.confirm("Restart?")) {
      setNextCounter(0);
    } else {
      history.push("/");
    }

    console.log("nextCounter is", nextCounter);
    console.log("deck.cards.length is", deck.cards.length);
    if (nextCounter >= deck.cards.length) {
      if (window.confirm("Restart?")) {
        setNextCounter(0);
      } else {
        history.push("/");
      }
    }
  };

  const flipHandler = (event) => {
    event.preventDefault();
    setFrontCard(!frontCard);
    setShowNext(true);
  };

  useEffect(() => {}, [nextCounter]);
  return (
    <React.Fragment>
      <BreadCrumbHeader path={path} />
      <h1> Study: {deck.name}</h1>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {nextCounter} Card {deck.cards[nextCounter].id} of
            {deck.cards.length}
          </h4>
          {frontCard ? (
            <p className="card-text">{deck.cards[nextCounter].front}</p>
          ) : (
            <p className="card-text">{deck.cards[nextCounter].back}</p>
          )}
          <button onClick={flipHandler} className="btn btn-secondary">
            Flip
          </button>
          {showNext ? (
            <button onClick={nextHandler} className="btn btn-primary">
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
  //   } else if (
  //     window.confirm("Restart Cards? Okay to restart, cancel to return home")
  //   ) {
  //     setNextCounter(0);
}

export default StudyDeck;
