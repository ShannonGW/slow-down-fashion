import React from "react";
import "../App.css";

export default function SuggestionsForm() {
  return (
    <div class="suggestions-form-container">
      <h5>
        {" "}
        Knowledge is power! Help others who are looking to find sustainable
        clothing brands. Use this form to your add favorite brand, and let's
        make a difference.{" "}
      </h5>
      <form class="suggestions-form">
        {/* Uncomment the next line to show the success message */}
        <div class="success-message">Success! Thank you for suggestion</div>
        <input
          id="brand-name"
          class="form-field"
          type="text"
          placeholder="Brand Name"
          name="brandName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}{" "}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="brand-info"
          class="form-field"
          type="text"
          placeholder="Tell us about them!"
          name="brand-info"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
