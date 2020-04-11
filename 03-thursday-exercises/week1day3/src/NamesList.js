import React from "react";
import PropTypes from "prop-types";

const NamesList = ({ names }) => {
  return (
    <React.Fragment>
      <ul>
        {names.map(name => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default NamesList;
NamesList.propTypes = {
  names: PropTypes.array
};