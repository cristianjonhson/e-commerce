// eslint-disable-next-line no-unused-vars
// TitleContainer.js

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const TitleComponent = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
};

TitleComponent.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default TitleComponent;



