import "./App.css";
import "./index.css";
import React, { useState } from "react";
import FormPage from "./components/Form";
import Wardrobe from "./components/Wardrobe";
import SuggestionsForm from "./components/SuggestionsForm";

function App() {
  //----original code-----/
  // const [myWardrobe, setMyWardrobe] = useState(true);

  // const handleWardrobeView = (myWardrobe) => {
  //   setMyWardrobe(myWardrobe);
  // };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index); //setting state with the index of the tabs
    console.log("toggleTab", index);
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

            <div className="col col-lg-2">
              {/* {toggleState === 1 ? <Wardrobe /> : <FormPage />} */}
              {toggleState === 1 && <Wardrobe />}
              {toggleState === 2 && <FormPage />}
              {toggleState === 3 && <SuggestionsForm />}
            </div>
          </div>
        </div>

        {/* {!myWardrobe ? <FormPage /> : <Wardrobe />} */}
      </body>
    </div>
  );
}

export default App;
