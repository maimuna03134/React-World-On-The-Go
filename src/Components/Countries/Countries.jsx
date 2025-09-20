// rsc
import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
// count how many countries i added
  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  // count how many flag i added
  const handleVisitedFlags = (flag) => {
    // console.log("Flags need to be added", flags);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      <h3>Total Country You Visited: {visitedCountries.length}</h3>
      <h3>Total Flag Visited: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      {/* visited flags */}
      <div className="visite-flag-container">
        {
          visitedFlags.map((flag, index)=><img key={index} src={flag}></img>)
        }
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
