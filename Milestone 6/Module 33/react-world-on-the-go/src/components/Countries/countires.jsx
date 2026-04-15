import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import Country from '../Country/country';
import './countries.css'


const Countires = ({fetchCall}) => {
  const countrySet = use(fetchCall);
  console.log(countrySet);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log('visited countries', country);

    const count = [...visitedCountries, country];
    setVisitedCountries(count);
  }
  return (
    <div>
      <h2>The number of country: {countrySet.countries.length}</h2>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(visit =>
            <li key={visit.cca3.cca3}>{visit.name.common}</li>
          )
        }
      </ol>

      <div className="countriesSection">
        {countrySet.countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}
          handleVisitedCountries = {handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countires;