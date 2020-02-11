import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const houses = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Wonderful hosue for rich people`];


ReactDOM.render(<App houses={houses}/>, document.querySelector(`#root`));
