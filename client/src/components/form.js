import React, { useState } from "react";
import "../App.css";

function Form() {
  const [category, setCategory] = useState("jacket");

  const [image, setImage] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newItem = { clothesCategory: category, clothesImage: image };

    fetch("http://localhost:5005/wardrobe", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newItem),
    }).then(() => {
      console.log("new item added");
    });

    console.log("submit clicked!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add a new item to your wardrobe!</h3>
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="www.example.com"
                  onChange={handleImageUpload}
                  name="imageUpload"
                />
                <label>Image URL</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option defaultValue>Choose a Category</option>
                  <option value="tops">Tops</option>
                  <option value="bottoms">Bottoms</option>
                  <option value="allInOne">All In One</option>
                  <option value="shoes">Shoes</option>
                  <option value="jackets">Jackets</option>
                </select>
                <label> Clothes Category</label>
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-dark button-size mt-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
