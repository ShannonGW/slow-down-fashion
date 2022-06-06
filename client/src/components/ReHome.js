import React from "react";

export default function ReHome({ reHomeItems, reHomeCB }) {
  //Handle for Re-Home button
  const handleUndoReHome = (clothingItem) => {
    console.log("Undo button clicked!");
    console.log("clothing item", clothingItem);
    reHomeCB(clothingItem);
  };

  return (
    <div className="container">
      <h5>Give clothes a second chance by re-homing them.</h5>

      <div className="container">
        <div className="row row-cols-3">
          {reHomeItems.map((item) => (
            <div className="rehome-grid">
              <img
                className=" shadow image-size rounded"
                src={item.clothesImage}
                alt={item.id}
              />
              <button
                id="undo"
                className="btn btn-danger"
                onClick={() => handleUndoReHome(item)}
              >
                Undo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
