import React from "react";
import renderer from "react-test-renderer";
import {OfferDetail} from "./offer-detail";
import {offersData} from "../../mocks/offers";

it(`<OfferDetail /> Testing`, () => {
  const tree = renderer.create(<OfferDetail offerData={offersData[1]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
