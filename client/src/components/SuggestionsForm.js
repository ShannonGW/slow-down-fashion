import React, { useState, useEffect } from "react";
import "../App.css";

export default function SuggestionsForm() {
  // getSuggestions will fetch suggestions set in the db
  useEffect(() => {
    fetch("http://localhost:5005/suggestions")
      .then((response) => response.json())
      .then((suggestions) => {
        setSuggestions(suggestions); //add all values to the setValues state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /*----------STATE----------*/

  const [values, setValues] = useState({
    brandName: "",
    brandWebsite: "",
    brandInfo: "",
  }); //values tracking input value change //formValues???

  const [submitted, setSubmitted] = useState(false); //checks if form is submitted for success message

  const [suggestions, setSuggestions] = useState([]);

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

    fetch("/suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      //if successful, set info to blank in the input field
      .then((r) => r.json()) //r = response
      .then((updatedSuggestions) => {
        //array of suggestions
        setSuggestions(updatedSuggestions); //setSuggestions is working as a function and and setting the updatedSuggestions as the values of the suggestions variable
        setSubmitted(true); // submitted is true so success message displays
        console.log("suggestions", suggestions);
      })
      .catch((err) => console.error(err));
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
      <div>
        <div className="table-header">
          <h4>SUGGESTIONS</h4>
        </div>
        <div className="table-container">
          <table className="table">
            {/* <div className="table-header"></div> */}
            <thead>
              <tr className="table-dark">
                <th scope="col">Brand Name</th>
                <th scope="col">Website</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody>
              {suggestions.map((suggestion) => {
                return (
                  <tr key={suggestion.id}>
                    <td className="table-light">{suggestion.brand_name}</td>

                    <td className="table-light">{suggestion.brand_website}</td>

                    <td className="table-light">{suggestion.brand_info}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
