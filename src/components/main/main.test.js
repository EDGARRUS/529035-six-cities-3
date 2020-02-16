import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {offersData} from "../../mocks/offers";

it(`<Main /> Testing`, () => {
  const tree = renderer.create(<Main offersData={offersData} openOfferDetail={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
