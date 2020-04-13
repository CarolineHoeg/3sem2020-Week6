import React, { useState, useEffect } from 'react';
import CountryTable from "./CountryTable";
import './App.css';
import countryFacade from './countryFacade';

const App = () => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  const updateLabels = async () => {
    let data = await countryFacade.getLabels();
    setLabels(data);
  };

  const updateCountries = async () => {
    let data = await countryFacade.getCountries();
    setCountries(data);
  };

  useEffect(() => {
		updateLabels();
		setInterval(updateCountries, 3000);
	}, []);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <CountryTable labels={labels} countries={countries} />
      </div>
    </div>
  );
};


export default App;
