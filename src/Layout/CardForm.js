import React from "react";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

function CardForm({
  initialFormState,
  handleSubmit,
  submitButtonText,
  exitHandler,
  exitButtonText,
}) {
  const { url, path, params } = useRouteMatch;
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setFormData(initialFormState);
  }, [initialFormState]);

  const submitHandler = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({ ...initialFormState });
  };

  const handleExit = (event) => {
    event.preventDefault();
    exitHandler();
  };

  return (
    <React.Fragment>
      <form id="formElem" onSubmit={submitHandler}>
        <p>
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            id="front"
            name="front"
            placeholder="Front of card"
            value={formData.front}
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
            value={formData.back}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </p>
        <button className="btn btn-secondary mx-2" onClick={handleExit}>
          {exitButtonText}
        </button>
        <button className="btn btn-primary mx-2" type="submit">
          {submitButtonText}
        </button>
      </form>
    </React.Fragment>
  );
}

export default CardForm;
