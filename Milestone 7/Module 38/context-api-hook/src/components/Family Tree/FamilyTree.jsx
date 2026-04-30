// import React from 'react';
import { createContext } from "react";
import Grandpa from "./Grandpa";

export const AssetContex = createContext("");

const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = "gold";
  return (
    <div>
      <h1>Family Tree</h1>

      <AssetContex.Provider value = {newAsset}>
        <Grandpa asset={asset}></Grandpa>
      </AssetContex.Provider>
    </div>
  );
};

export default FamilyTree;
