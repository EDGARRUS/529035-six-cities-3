import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offersData} from "../../mocks/offers";

it(`<App /> Testing`, () => {
  const tree = renderer.create(<App offersData={offersData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
