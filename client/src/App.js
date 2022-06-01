import "./App.css";
import "./index.css";
import React, { useState } from "react";
import FormPage from "./components/Form";
import Wardrobe from "./components/Wardrobe";
import SuggestionsForm from "./components/SuggestionsForm";
import ReHome from "./components/ReHome";

function App() {
  const [toggleState, setToggleState] = useState(1);
  const [reHomeItems, setReHomeItems] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index); //setting state with the index of the tabs
    console.log("toggleTab", index);
  };

  const reHome = (clothingItem) => {
    fetch(`http://localhost:5005/wardrobe/${clothingItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: !clothingItem.complete,
      }),
    })
      .then((res) => res.json()) //first response and needs to be converted to json
      .then((updatedReHomeClothes) => setReHomeItems(updatedReHomeClothes))
      .catch((e) => console.error(e));

    console.log("clothingItem in App.js", clothingItem);
  };

  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="row">
            <div className="col justify-content-md-center ">
              {/* HEADING */}
              <h1 className="heading-font mt-3">Slow Down Fashion</h1>
            </div>
            <nav>
              <div className="col nav justify-content-end">
                <button
                  // className={myWardrobe ? "btn btn-dark" : "btn btn-light"}
                  // onClick={() => handleWardrobeView(true)}
                  className={
                    toggleState === 1 ? "btn btn-dark" : "btn btn-light" //if index is 1 (tab 1), dark button --just changes button color
                  }
                  onClick={() => toggleTab(1)} //on click, toggletab func is run which sets state by button's index
                >
                  My Wardrobe
                </button>
                <button
                  // className={!myWardrobe ? "btn btn-dark" : "btn btn-light"}
                  // onClick={() => handleWardrobeView(false)}
                  className={
                    toggleState === 2 ? "btn btn-dark" : "btn btn-light"
                  }
                  onClick={() => toggleTab(2)}
                >
                  Add item
                </button>
                <button
                  // className={!myWardrobe ? "btn btn-dark" : "btn btn-light"}
                  // onClick={() => handleWardrobeView(false)}
                  className={
                    toggleState === 3 ? "btn btn-dark" : "btn btn-light"
                  }
                  onClick={() => toggleTab(3)}
                >
                  Brand Suggestions
                </button>
                <button
                  className={
                    toggleState === 4 ? "btn btn-dark" : "btn btn-light"
                  }
                  onClick={() => toggleTab(4)}
                >
                  Re-Home
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="d-flex flex-row">
              <p className="mt-2 text-center heading-font">
                {" "}
                Help save the planet by finding a new love <br></br>for your
                existing clothes
              </p>
            </div>

            {/* <div className="col col-lg-2"> */}
            <div>
              {/* {toggleState === 1 ? <Wardrobe /> : <FormPage />} */}
              {toggleState === 1 && (
                <Wardrobe reHomeCB={(clothingItem) => reHome(clothingItem)} />
              )}
              {toggleState === 2 && <FormPage />}
              {toggleState === 3 && <SuggestionsForm />}
              {toggleState === 4 && <ReHome reHomeItems={reHomeItems} />}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
