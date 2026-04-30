// import React from 'react';
import Dad from "./Dad";
import Myself from "./Myself";
import Son from "./Son";

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <Dad></Dad>
            <Myself asset = {asset}></Myself>
            <Son></Son>
        </div>
    );
};

export default Grandpa;