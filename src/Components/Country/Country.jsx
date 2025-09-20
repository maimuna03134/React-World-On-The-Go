import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  // console.log(handleVisitedCountries);

  const [visited, setVisited] = useState(false);

  //   console.log(country.capital.capital);

  const handleVisited = () => {
    // console.log('Button clicked');
    // if (visited) {
    //     setVisited(false);
    // } else {
    //     setVisited(true);
    // }

    // setVisited(visited ? false : true);

    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <h4>Capital: {country.capital.capital}</h4>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? " - Big Country" : " - Small Country"}
      </p>
      <p>Population: {country.population.population}</p>

      <button
        onClick={handleVisited}
        className={`country ${visited && "btn-visited"}`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
