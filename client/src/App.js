//--------------------IMPORT COMPONENTS---------------------------------//
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import FormPage from "./components/Form";
import Wardrobe from "./components/Wardrobe";
import SuggestionsForm from "./components/SuggestionsForm";
import ReHome from "./components/ReHome";
//----------------------------------------------------------------------//
function App() {
  //--------------------STATE VARIABLES---------------------------------//
  //toggleState is setting the state of the tab buttons by setting their index.
  const [toggleState, setToggleState] = useState(1);
  //????
  const [reHomeItems, setReHomeItems] = useState([]);

  //toggleTab function is running the setToggleState with the tabs indexes
  const toggleTab = (index) => {
    setToggleState(index); //setting state with the index of the tabs
    console.log("toggleTab", index);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:5005/wardrobe");
    const results = await response.json();
    let tempReHome = results.filter((result) => result.complete === 1);
    setReHomeItems(tempReHome);
    console.log(results);
  }

  //--------------------FUNCTIONS ---------------------------------//
  //reHome function is fetching a clothing item by its id and setting it to complete (1) if it isn't already
  const reHome = (clothingItem) => {
    console.log("clothingItem", clothingItem);
    fetch(`http://localhost:5005/wardrobe/${clothingItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: !clothingItem.complete,
      }),
    })
      .then((res) => res.json())
      .then((updatedReHomeClothes) => setReHomeItems(updatedReHomeClothes))
      //outcome of previous promise

      .catch((e) => console.error(e));

    console.log("clothingItem in App.js", clothingItem);
  };
  //----------------------------------------------------------------------//

  //-------------------------------JSX/HTML---------------------------------------//

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col justify-content-md-center ">
            {/* HEADING */}
            <h1 className="heading-font mt-3">Slow Down Fashion</h1>
          </div>
          <nav>
            <div className="col nav justify-content-end">
              <button
                className={
                  toggleState === 1 ? "btn btn-dark" : "btn btn-light" //if index is 1 (tab 1), dark button --just changes button color
                }
                onClick={() => toggleTab(1)} //on click, toggletab func is run which sets state by button's index
              >
                My Wardrobe
              </button>
              <button
                className={toggleState === 2 ? "btn btn-dark" : "btn btn-light"}
                onClick={() => toggleTab(2)}
              >
                Add item
              </button>
              <button
                className={toggleState === 3 ? "btn btn-dark" : "btn btn-light"}
                onClick={() => toggleTab(3)}
              >
                Brand Suggestions
              </button>
              <button
                className={toggleState === 4 ? "btn btn-dark" : "btn btn-light"}
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
          {/* //-------------------------------PASSING PROPS---------------------------------------// */}
          <div>
            {toggleState === 1 && (
              //-------------------------------JSX/HTML---------------------------------------//
              <Wardrobe reHomeCB={(clothingItem) => reHome(clothingItem)} />
              // ********* ??? *********
            )}
            {toggleState === 2 && <FormPage />}
            {toggleState === 3 && <SuggestionsForm />}
            {toggleState === 4 && (
              <ReHome
                reHomeItems={reHomeItems}
                reHomeCB={(clothingItem) => reHome(clothingItem)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
