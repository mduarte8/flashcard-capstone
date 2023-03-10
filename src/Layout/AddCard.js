import React, { useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { createCard } from "../utils/api";
import BreadCrumbHeader from "./BreadCrumbHeader";

function AddCard({ deck, loadDeck }) {
  const { url, path } = useRouteMatch();
  const { deckId } = useParams();
  const history = useHistory();
  const initialFormState = {
    front: "",
    back: "",
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
    await createCard(deckId, formData);
    setFormData({ ...initialFormState });
    await loadDeck();
    event.target.reset();
  };

  const exitHandler = async (event) => {
    event.preventDefault();
    await loadDeck();
    history.push(`/decks/${deckId}`);
  };

  return (
    <React.Fragment>
      <BreadCrumbHeader deck={deck} />
      <h2>{deck.name}</h2>
      <h1>Add Card</h1>
      <form id="formElem" onSubmit={submitHandler}>
        <p>
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            id="front"
            name="front"
            placeholder="Front of card"
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </p>
        <p>
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            id="back"
            name="back"
            placeholder="Back of card"
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </p>
        <button className="btn btn-secondary mx-2" onClick={exitHandler}>
          Done
        </button>
        <button className="btn btn-primary mx-2" type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default AddCard;
