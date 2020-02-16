import React from "react";
import renderer from "react-test-renderer";
import {OffersList} from "./offers-list";
import {offersData} from "../../mocks/offers";

it(`<OffersList /> Testing`, () => {
  const tree = renderer.create(<OffersList offersData={offersData} openOfferDetail={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
