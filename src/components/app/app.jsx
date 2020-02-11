import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleButtonHandler = () => {};

const App = (props) => {
  return <div><p>Главная страница приложения</p><Main houses={props.houses} onTitleButtonClick={titleButtonHandler} /></div>;
};

App.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleButtonClick: PropTypes.func.isRequired,
};

export default App;
