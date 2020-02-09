import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  return <div><h1>Предложения</h1>{props.houses.map((house, i) => <p key={i}>{house}</p>)}</div>;
};

Main.propTypes = {
  houses: PropTypes.array.isRequired
};

export default Main;
