import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BreadCrumbHeader from "./BreadCrumbHeader";

function EditCard({ deck }) {
  const params = useParams();
  const { url, path } = useRouteMatch();
  console.log("EditCard params is", params);
  console.log("EditCard deck is", deck);
  return (
    <React.Fragment>
      <BreadCrumbHeader path={path} />
      <p>Placeholder in EditCard!</p>;
    </React.Fragment>
  );
}

export default EditCard;
