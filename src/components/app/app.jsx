import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  return <div><Main houses={props.houses} /></div>;
};

App.propTypes = {
  houses: PropTypes.array.isRequired
};

export default App;
