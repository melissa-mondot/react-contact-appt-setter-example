import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return list.map((listItem, idx) => <Tile key={idx} listItem={listItem} />);
};
