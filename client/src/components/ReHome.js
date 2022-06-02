import React, { useEffect } from "react";

export default function ReHome({ reHomeItems }) {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5005/wardrobe");
      const results = await response.json();
      console.log(results);
    }
    fetchData();
  }, []);

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
