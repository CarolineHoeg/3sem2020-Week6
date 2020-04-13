import React from "react";
import PropTypes from 'prop-types';

const CountryTable = (props) => {
  const { labels, countries } = props;

  const hideAddlInfo = (array) => {
    if (array.length > 1) {
      return (
        <>
        {array[0]} (+{array.length - 1})
        </>
      )
    } else {
      return <>{array[0]}</>
    }
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {labels.map(label => {
              return <th key={label}>{label}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {countries.map(country => {
            return (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td>{hideAddlInfo(country.timezones)}</td>
                <td>{hideAddlInfo(country.borders)}</td>
                <td>{hideAddlInfo(country.topLevelDomain)}</td>
                <td>{hideAddlInfo(country.currencies)}</td>
                <td>{hideAddlInfo(country.languages)}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;

CountryTable.propTypes = {
  labels: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired
}