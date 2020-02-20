import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map.jsx";
import {offersData} from "../../mocks/offers";

it(`<Map /> Testing`, () => {
  const tree = renderer.create(<Map offersData={offersData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
