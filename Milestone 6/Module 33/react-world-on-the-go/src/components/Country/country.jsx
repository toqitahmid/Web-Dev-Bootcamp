import React, { useState } from 'react';
import {  } from 'react';
import './country.css';


const Country = ({ country, handleVisitedCountries}) => {
  const [visit, setVisit] = useState(false);
  const handlevisit = () => {
    if (visit === false) {
      setVisit(true);
    } else {
      setVisit(false);
    }
    handleVisitedCountries(country);
  };

  return (
    <div className={visit ? "visit-country" : "countrySection"}>
      <img src={country.flags?.flags.png} alt="" />
      <h1>{country.name.common}</h1>
      <p>
        Area : {country.area.area} km{" "}
        {country.area.area < 300000 ? " Small Country " : " Large Country "}
      </p>
      <button onClick={handlevisit}>{visit ? "Visited" : "Not Visited"}</button>
    </div>
  );
};

export default Country;