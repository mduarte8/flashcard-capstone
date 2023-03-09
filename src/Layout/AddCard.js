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
  console.log("deckId in addcard is", deckId);
  const initialFormState = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    console.log(target.value);
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createCard(deckId, formData);
    // const response = await createCard(deckId, formData);
    // console.log("response is", response);
    console.log("formData is", formData);
    console.log("Success Submitted!!");
    setFormData({ ...initialFormState });
    await loadDeck();
    // history.push(`/decks/${deckId}`);
    event.target.reset();
    //THIS NEEDS TO BE UPDATED TO GO TO THE PAGE OF THE NEWLY CREATED DECK
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
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            placeholder="Front of card"
            onChange={handleChange}
          ></textarea>
        </p>
        <p>
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            placeholder="Back of card"
            onChange={handleChange}
          ></textarea>
        </p>
        <button className="btn btn-secondary" onClick={exitHandler}>
          Done
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <p>Placeholder in jas AddCard!</p>
    </React.Fragment>
  );
}

export default AddCard;
