import React from "react";

export const Tile = (listItem) => {
  let tileInfo = listItem["listItem"];
  console.log(Object.entries(tileInfo)); // map over entries results
  return <div className="tile-container"></div>;
};

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
