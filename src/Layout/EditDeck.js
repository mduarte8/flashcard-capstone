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
import { readDeck, updateDeck } from "../utils/api";

function EditDeck({ deck, loadDeck }) {
  const { deckId, cardId } = useParams();
  //   console.log("edit card params is,", deckId, cardId);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  //   console.log("deck in editCard is", deck);
  const initialFormState = { id: 0, name: "", description: "" };
  const [formData, setFormData] = useState({ ...initialFormState });
  console.log("initial Form State = ", initialFormState);
  //   console.log("edit card formData is", formData);
  console.log("formData before readC is", formData);

  useEffect(() => {
    readDeck(deckId).then((deck) => setFormData({ ...deck }));
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
    await updateDeck(formData);
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
        {deck.name} : Edit Deck {deckId}{" "}
      </h2>
      <form id="formElem" onSubmit={submitHandler}>
        <div class="mb-3">
          <p>
            <label htmlFor="name" class="form-label">
              Name
            </label>
            <textarea
              class="form-control"
              id="name"
              name="name"
              placeholder="Name of Deck"
              value={formData.name}
              onChange={handleChange}
            ></textarea>
          </p>
          <p>
            <label htmlFor="description" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
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

export default EditDeck;
