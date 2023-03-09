import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import BreadCrumbHeader from "./BreadCrumbHeader";
import { updateCard, readDeck, readCard } from "../utils/api";

function EditCard({ deck, loadDeck }) {
  const { deckId, cardId } = useParams();
  //   console.log("edit card params is,", deckId, cardId);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  //   console.log("deck in editCard is", deck);
  const initialFormState = { id: 0, front: "", back: "" };
  const [formData, setFormData] = useState({ ...initialFormState });
  console.log("initial Form State = ", initialFormState);
  //   console.log("edit card formData is", formData);
  console.log("formData before readC is", formData);

  useEffect(() => {
    readCard(cardId).then((card) => setFormData({ ...card }));
  }, []);

  console.log("formData after readCard is", formData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await updateCard(formData);
    await loadDeck();
    console.log("Updated Card is", formData);
    history.goBack();
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <React.Fragment>
      <BreadCrumbHeader deck={deck} />
      <h2>
        {deck.name} : Edit Card {cardId}{" "}
      </h2>
      <form id="formElem" onSubmit={submitHandler}>
        <p>
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            placeholder="Front of card"
            value={formData.front}
            onChange={handleChange}
          ></textarea>
        </p>
        <p>
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            placeholder="Back of card"
            value={formData.back}
            onChange={handleChange}
          ></textarea>
        </p>
        <button onClick={cancelHandler} className="btn btn-secondary">
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <p>Placeholder in jas AddCard!</p>
    </React.Fragment>
  );
}

export default EditCard;
