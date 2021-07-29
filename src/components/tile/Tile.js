import React from "react";

export const Tile = (listItem) => {
  let tileData = Object.entries(listItem["listItem"]);
  let tileInfo = [];

  for (const [key, value] of tileData) {
    key === tileData[0][0]
      ? tileInfo.push(
          <p className="tile-title" key={key}>
            {key}: {value}
          </p>
        )
      : tileInfo.push(
          <p className="tile" key={key}>
            {key}: {value}
          </p>
        );
  }

  let generateTiles = tileInfo.map((item) => item);

  return <div className="tile-container">{generateTiles}</div>;
};
