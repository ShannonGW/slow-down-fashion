import React, { useState, useEffect } from "react";

function Wardrobe({ reHomeCB }) {
  const [jackets, setJackets] = useState([]);
  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [allInOnes, setAllInOnes] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5005/wardrobe/item/jacket"
      );
      const results = await response.json();
      // console.log(results);
      setJackets(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5005/wardrobe/item/top");
      const results = await response.json();
      // console.log(results);
      setTops(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5005/wardrobe/item/bottoms"
      );
      const results = await response.json();
      // console.log(results);
      setBottoms(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5005/wardrobe/item/allinone"
      );
      const results = await response.json();
      // console.log(results);
      setAllInOnes(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5005/wardrobe/item/shoes");
      const results = await response.json();
      // console.log(results);
      setShoes(results);
    }
    fetchData();
  }, []);

  const handleDelete = (event) => {
    fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    setJackets([...jackets]);
  };

  //-------------------------------------REHOME-----------------------------------------//
  //Handle for Re-Home button
  const handleReHome = (clothingItem) => {
    console.log("Re-Home button clicked!");
    console.log("clothing item", clothingItem);
    reHomeCB(clothingItem);
  };

  //-------------------------------STATE-----------------------------------------------//
  const [jacketsButton, setJacketsButton] = useState(false);
  const handleJacketsButton = (jacketsButton) => {
    setJacketsButton(jacketsButton);
  };

  const [topsButton, setTopsButton] = useState(false);
  const handleTopsButton = (topsButton) => {
    setTopsButton(topsButton);
  };

  const [bottomsButton, setBottomsButton] = useState(false);
  const handleBottomsButton = (bottomsButton) => {
    setBottomsButton(bottomsButton);
  };

  const [allInOnesButton, setAllInOnesButton] = useState(false);
  const handleAllInOnesButton = (allInOnesButton) => {
    setAllInOnesButton(allInOnesButton);
  };

  const [shoesButton, setShoesButton] = useState(false);
  const handleShoesButton = (shoesButton) => {
    setShoesButton(shoesButton);
  };

  // when an image is clicked, the object from my table should be added to an array
  const [chosenOutfit, setChosenOutfit] = useState([]);
  const handleOutfit = (outfit) => {
    console.log(outfit, " is here");
    if (chosenOutfit.length === 0) setChosenOutfit([outfit]);
    else setChosenOutfit([...chosenOutfit, outfit]);
    console.log("all chosen outfits\n ", chosenOutfit);
  };

  const handleRemoveItem = (event) => {
    console.log(chosenOutfit, " is my original outfit array");

    for (let i = 0; i < chosenOutfit.length; i++) {
      if (chosenOutfit[i] === event) {
        chosenOutfit.splice(i, 1);
        setChosenOutfit([...chosenOutfit]);
      }
    }
    console.log(chosenOutfit, " is the new array");
  };

  return (
    <div>
      <div className="container">
        <div className=" justify-content-center">
          <div className="col">
            {chosenOutfit.map((oneOutfit, index) => {
              return (
                <div key={oneOutfit.id}>
                  <img
                    className="shadow chosenOutfit-size rounded"
                    src={oneOutfit.clothesImage}
                    alt={oneOutfit.id}
                    onClick={() => handleRemoveItem(oneOutfit)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center mt-4 mb-4">
          <div className="d-flex flex-row gap-1 justify-content-md-center">
            <button
              className="btn btn-outline-dark"
              onClick={
                jacketsButton
                  ? () => handleJacketsButton(false)
                  : () => handleJacketsButton(true)
              }
            >
              Jackets
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={
                topsButton
                  ? () => handleTopsButton(false)
                  : () => handleTopsButton(true)
              }
            >
              Tops
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={
                bottomsButton
                  ? () => handleBottomsButton(false)
                  : () => handleBottomsButton(true)
              }
            >
              Bottoms
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={
                allInOnesButton
                  ? () => handleAllInOnesButton(false)
                  : () => handleAllInOnesButton(true)
              }
            >
              All In Ones
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={
                shoesButton
                  ? () => handleShoesButton(false)
                  : () => handleShoesButton(true)
              }
            >
              Shoes
            </button>
          </div>
        </div>
      </div>

      {jacketsButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {/* FILTERING THROUGH 'COMPLETE' */}
            {jackets
              .filter((oneJacket) => oneJacket.complete === 0)
              .map((oneJacket) => {
                return (
                  <div key={oneJacket.id} className="col">
                    <div className="image-buttons">
                      <img
                        className="shadow image-size rounded "
                        src={oneJacket.clothesImage}
                        alt={oneJacket.id}
                        onClick={() => handleReHome(oneJacket)}
                      />
                      <div>
                        {/* <div className="hstack gap-3"> */}
                        <button
                          className="btn btn-outline-danger remove-button p-2 "
                          onClick={() => handleDelete(oneJacket.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn-outline-dark rehome-button m-1  "
                          onClick={() => handleReHome(oneJacket)}
                        >
                          Re-Home
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {topsButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {tops
              .filter((oneTop) => oneTop.complete === 0)
              .map((oneTop, index) => {
                return (
                  <div key={oneTop.id}>
                    <div className="image-buttons">
                      <img
                        className="shadow image-size rounded "
                        src={oneTop.clothesImage}
                        alt={oneTop.id}
                        onClick={() => handleOutfit(oneTop)}
                      />
                      <div>
                        <button
                          className="btn btn-outline-danger remove-button p-2"
                          onClick={() => handleDelete(oneTop.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn-outline-dark rehome-button m-1"
                          onClick={() => handleReHome(oneTop)}
                        >
                          Re-Home
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {bottomsButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {bottoms
              .filter((oneBottoms) => oneBottoms.complete === 0)
              .map((oneBottoms, index) => {
                return (
                  <div key={oneBottoms.id} className="col">
                    <div className="d-flex flex-column mb-3">
                      <img
                        className="shadow image-size rounded"
                        src={oneBottoms.clothesImage}
                        alt={oneBottoms.id}
                        onClick={() => handleOutfit(oneBottoms)}
                      />
                      <div>
                        {" "}
                        <button
                          className="btn btn-outline-danger remove-button p-2"
                          onClick={() => handleDelete(oneBottoms.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn-outline-dark rehome-button m-1"
                          onClick={() => handleReHome(oneBottoms)}
                        >
                          Re-Home
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {allInOnesButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {allInOnes
              .filter((oneAllInOne) => oneAllInOne.complete === 0)
              .map((oneAllInOne, index) => {
                return (
                  <div key={oneAllInOne.id} className="col">
                    <div className="d-flex flex-column mb-3">
                      <img
                        className="shadow image-size rounded "
                        src={oneAllInOne.clothesImage}
                        alt={oneAllInOne.id}
                        onClick={() => handleOutfit(oneAllInOne)}
                      />
                      <div>
                        <button
                          className="btn btn-outline-danger remove-button p-2"
                          onClick={() => handleDelete(oneAllInOne.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn-outline-dark rehome-button m-1"
                          onClick={() => handleReHome(oneAllInOne)}
                        >
                          Re-Home
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {shoesButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {shoes
              .filter((oneShoe) => oneShoe.complete === 0)
              .map((oneShoes, index) => {
                return (
                  <div key={oneShoes.id}>
                    <div className="d-flex flex-column mb-3">
                      <img
                        className="shadow image-size rounded "
                        src={oneShoes.clothesImage}
                        alt={oneShoes.id}
                        onClick={() => handleOutfit(oneShoes)}
                      />
                      <div>
                        <button
                          className="btn btn-outline-danger remove-button p-2"
                          onClick={() => handleDelete(oneShoes.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn-outline-dark rehome-button m-1"
                          onClick={() => handleReHome(oneShoes)}
                        >
                          Re-Home
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Wardrobe;
