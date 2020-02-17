import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {offersData} from "../../mocks/offers";

it(`<OfferCard /> Testing`, () => {
  const tree = renderer.create(<OfferCard offerData={offersData[1]} titleClickHandler={()=>{}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
