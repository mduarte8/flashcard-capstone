import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BreadCrumbHeader from "./BreadCrumbHeader";

function EditDeck({ deck }) {
  return (
    <React.Fragment>
      <BreadCrumbHeader deck={deck} />
      <p>Placeholder in Edigdfgt!</p>
    </React.Fragment>
  );
}

export default EditDeck;
