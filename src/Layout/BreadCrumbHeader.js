import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function BreadCrumbHeader({ deck = {} }) {
  const params = useParams();
  const { url, path } = useRouteMatch();
  console.log("breadcrumbheader params are", params);
  console.log("breadcrumbheader path is", path);
  console.log("url is", url);
  //   console.log("bch card.id is", card.id);

  if (url !== "/") {
    return (
      <React.Fragment>
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol className="breadcrumb pb-0">
            <li className="breadcrumb-item">
              {/* <Link to="/">Home</Link> */}
              <Link to="/">Home</Link>
            </li>
            {url === "/decks/new" ? (
              <li className="breadcrumb-item active">
                <span> Create Deck </span>
              </li>
            ) : url.includes("/study") ? (
              <React.Fragment>
                {/* <span> / </span> */}
                {/* <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "} */}
                <li className="breadcrumb-item">
                  <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active">Study</li>
                {/* <span> / Study</span>{" "} */}
              </React.Fragment>
            ) : path.includes("/:deckId/edit") ? (
              <React.Fragment>
                {/* <span> / </span> */}
                {/* <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "} */}
                <li className="breadcrumb-item">
                  <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active">Edit Deck</li>
                {/* <span> / Edit Deck</span>{" "} */}
              </React.Fragment>
            ) : url.includes("/cards/new") ? (
              <React.Fragment>
                {/* <span> / </span> */}
                {/* <Link to={`/decks/${deck.id}`}>{deck.name} </Link>{" "} */}
                {/* <span> / Add Card</span>{" "} */}
                <li className="breadcrumb-item">
                  <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active">Add Card</li>
              </React.Fragment>
            ) : path.includes("/:cardId/edit") ? (
              <React.Fragment>
                <li className="breadcrumb-item">
                  <Link to={`/decks/${deck.id}`}>{deck.name} </Link>
                </li>
                <li className="breadcrumb-item active">
                  Edit Card {params.cardId}
                </li>
              </React.Fragment>
            ) : (
              //   <span> / {deck.name}</span>
              <li className="breadcrumb-item active">{deck.name}</li>
            )}
          </ol>
        </nav>
      </React.Fragment>
    );
  } else return "";
}

export default BreadCrumbHeader;
