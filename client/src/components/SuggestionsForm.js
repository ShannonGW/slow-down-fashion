import React, { useState, useEffect } from "react";
import "../App.css";

export default function SuggestionsForm() {
  // getSuggestions will fetch suggestions set in the db
  useEffect(() => {
    getSuggestions();
  });

  // const [values, setValues] = useState([
  //   {
  //     brandName: "",
  //     brandWebsite: "",
  //     brandInfo: "",
  //   },
  // ]);
  /*----------STATE----------*/

  const [values, setValues] = useState([]); //values tracking input value change

  const [submitted, setSubmitted] = useState(false); //checks if form is submitted for success message

  const [input, setInput] = useState([]);

  /*----------INPUT CHANGE----------*/

  const handleBrandNameInputChange = (event) => {
    setValues({ ...values, brandName: event.target.value });
  };

  const handleBrandWebsiteInputChange = (event) => {
    setValues({ ...values, brandWebsite: event.target.value });
  };

  const handleBrandInfoInputChange = (event) => {
    setValues({ ...values, brandInfo: event.target.value });
  };
  /*----------SUBMIT FORM----------*/

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setSubmitted(true); // submitted is true so success message displays
  };

  /*------------------------INFORMATION COMING FROM DB WHICH IS SET IN BACKENED (suggestions.js)-----------------------*/

  //fetch array of suggestions objects from DB
  const getSuggestions = () => {
    fetch("/suggestions")
      .then((response) => response.json())
      .then((input) => {
        setInput(input); //add all values to the setValues state
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*------------------------JSX/HTML-----------------------*/

  return (
    <div className="suggestions-form-container">
      <h5>
        {" "}
        Knowledge is power! Help others who are looking to find sustainable
        clothing brands. Use this form to your add favorite brand, and let's
        make a difference.{" "}
      </h5>
      <form className="suggestions-form" onSubmit={handleSubmitForm}>
        {submitted ? (
          <div className="success-message">
            {" "}
            Success! Thanks for your suggestion
          </div>
        ) : null}
        <input
          onChange={handleBrandNameInputChange}
          value={values.brandName}
          id="brand-name"
          className="form-field"
          type="text"
          placeholder="Brand Name"
          name="brandName"
        />
        <input
          onChange={handleBrandWebsiteInputChange}
          value={values.brandWebsite}
          id="brand-website"
          className="form-field"
          type="text"
          placeholder="Website"
          name="brandWebsite"
        />
        <input
          onChange={handleBrandInfoInputChange}
          value={values.brandInfo}
          id="brand-info"
          className="form-field"
          type="text"
          placeholder="Tell us about them!"
          name="brandInfo"
        />

        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
