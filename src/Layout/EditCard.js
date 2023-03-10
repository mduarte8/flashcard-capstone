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
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const initialFormState = { id: 0, front: "", back: "" };
  const [formData, setFormData] = useState({ ...initialFormState });

  useEffect(() => {
    readCard(cardId).then((card) => setFormData({ ...card }));
  }, []);

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
        <div class="mb-3">
          <p>
            <label htmlFor="front" className="form-label">
              Front
            </label>
            <textarea
              className="form-control"
              id="front"
              name="front"
              placeholder="Front of card"
              value={formData.front}
              onChange={handleChange}
            ></textarea>
          </p>
          <p>
            <label htmlFor="back" class="form-label">
              Back
            </label>
            <textarea
              class="form-control"
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
        </div>
      </form>
    </React.Fragment>
  );
}

export default EditCard;
