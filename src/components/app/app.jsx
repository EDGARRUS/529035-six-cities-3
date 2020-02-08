import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div><Main count={props.count} /></div>;
};

export default App;
