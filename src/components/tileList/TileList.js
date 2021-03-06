import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (list) => {
  let tileList = list["list"];
  return tileList.map((listItem, idx) => (
    <Tile key={idx} listItem={listItem} />
  ));
};
