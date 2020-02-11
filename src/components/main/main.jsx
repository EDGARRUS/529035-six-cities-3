import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  return <div className="offers"><h1>Предложения</h1>{props.houses.map((house, i) => <h3 key={i} onClick={props.onTitleButtonClick}>{house}</h3>)}</div>;
};

Main.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleButtonClick: PropTypes.func.isRequired,
};

export default Main;
