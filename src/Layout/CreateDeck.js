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
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createDeck(formData);
    history.goBack();
  };

  return (
    <React.Fragment>
      <BreadCrumbHeader path={path} />
      <h1>Create Deck</h1>
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <p>
            <label htmlFor="name" class="form-label">
              Name
            </label>
            <input
              class="form-control"
              id="name"
              type="text"
              name="name"
              placeholder="Deck Name"
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label htmlFor="description" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              placeholder="Brief description of the deck"
              onChange={handleChange}
            ></textarea>
          </p>
          <button
            class="btn btn-secondary mx-2"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
          <button type="submit mx-2" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default CreateDeck;
