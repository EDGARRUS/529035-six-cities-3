import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const countOffers = 86;

ReactDOM.render(<App count={countOffers}/>, document.querySelector(`#root`));
