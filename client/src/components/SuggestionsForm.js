import React, { useState } from "react";
import "../App.css";

export default function SuggestionsForm() {
  const [values, setValues] = useState({
    brandName: "",
    brandWebsite: "",
    brandInfo: "",
  });

  const [submited, setSubmitted] = useState(false);

  const handleBrandNameInputChange = (event) => {
    setValues({ ...values, brandName: event.target.value });
  };

  const handleBrandWebsiteInputChange = (event) => {
    setValues({ ...values, brandWebsite: event.target.value });
  };

  const handleBrandInfoInputChange = (event) => {
    setValues({ ...values, brandInfo: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div class="suggestions-form-container">
      <h5>
        {" "}
        Knowledge is power! Help others who are looking to find sustainable
        clothing brands. Use this form to your add favorite brand, and let's
        make a difference.{" "}
      </h5>
      <form class="suggestions-form" onSubmit={handleSubmitForm}>
        {submited ? (
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
