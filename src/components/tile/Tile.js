import React from "react";

export const Tile = (listItem) => {
console.log(listItem['listItem'])
let tileInfo = listItem['listItem']
  return (
    <div className="tile-container">
      <p>Name: {tileInfo.name}</p>
      <p>Phone: {tileInfo.phone}</p>
      <p>Email: {tileInfo.email}</p>
      <p>Next Appt: </p>
    </div>
  );
};
