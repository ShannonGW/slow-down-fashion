import React from "react";

export default function ReHome({ reHomeItems }) {
  return (
    <div>
      <h5>Give clothes a second chance by re-homing them.</h5>

      {reHomeItems.map((item) => (
        <img
          className="image-size rounded"
          src={item.clothesImage}
          alt={item.id}
        />
      ))}
    </div>
  );
}
