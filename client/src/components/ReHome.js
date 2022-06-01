import React from "react";

export default function ReHome({ reHomeItems }) {
  return (
    <div>
      <h5>Give clothes a second chance by re-homing them.</h5>
      <ul>
        {reHomeItems.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}
