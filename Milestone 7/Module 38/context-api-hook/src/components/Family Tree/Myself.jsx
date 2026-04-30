// import React from 'react';

import { useContext } from "react";
import { AssetContex } from "./FamilyTree";

const Myself = ({asset}) => {

    const newAsset = useContext(AssetContex);
    return (
        <div>
            <h3>Myself</h3>
            <p>Assets of Myself: {asset}, {newAsset}</p>
        </div>
    );
};

export default Myself;