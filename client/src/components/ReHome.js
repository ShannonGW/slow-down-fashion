import React from "react";

export default function ReHome({ reHomeItems, reHomeCB }) {
  //Handle for Re-Home button
  const handleUndoReHome = (clothingItem) => {
    console.log("Undo button clicked!");
    console.log("clothing item", clothingItem);
    reHomeCB(clothingItem);
  };

  return (
    <div>
      <h5>Give clothes a second chance by re-homing them.</h5>

      {reHomeItems.map((item) => (
        <div>
          <img
            className="image-size rounded"
            src={item.clothesImage}
            alt={item.id}
          />
          <button
            className="btn btn-outline-danger"
            onClick={() => handleUndoReHome(item)}
          >
            Undo
          </button>
        </div>
      ))}
    </div>
  );
}
