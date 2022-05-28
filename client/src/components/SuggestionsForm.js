import React, { useState } from "react";
import "../App.css";
import { useState } from "react";

export default function SuggestionsForm() {
  const [formData, setFormData] = useState({});

  return (
    <div class="suggestions-form-container">
      <h5>
        {" "}
        Knowledge is power! Help others who are looking to find sustainable
        clothing brands. Use this form to your add favorite brand, and let's
        make a difference.{" "}
      </h5>
      <form class="suggestions-form">
        {/* <div class="success-message">Success! Thank you for suggestion</div> */}
        <input
          id="brand-name"
          class="form-field"
          type="text"
          placeholder="Brand Name"
          name="brandName"
        />
        <input
          id="brand-website"
          class="form-field"
          type="url"
          placeholder="Website"
          name="brandWebsite "
        />
        <input
          id="brand-info"
          class="form-field"
          type="text"
          placeholder="Tell us about them!"
          name="brand-info"
        />

        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
