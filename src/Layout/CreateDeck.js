import React, { useState, useEffect } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { createDeck } from "../utils/api";
import BreadCrumbHeader from "./BreadCrumbHeader";

function CreateDeck() {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    createDeck(formData);
    history.push("/decks");
  };

  return (
    <React.Fragment>
      <BreadCrumbHeader path={path} />
      <h1>Create Deck</h1>
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Deck Name"
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Brief description of the deck"
            onChange={handleChange}
          ></textarea>
        </p>

        <button onClick={() => history.push("/")}>Cancel</button>

        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default CreateDeck;
