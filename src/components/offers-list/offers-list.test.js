import React from "react";
import renderer from "react-test-renderer";
import {OffersList} from "./offers-list";
import {offersData} from "../../mocks/offers";
import {ViewType} from "../../const";

describe(`Render Offers List`, () => {
  it(`<OffersList /> Testing Main List`, () => {
    const tree = renderer.create(<OffersList offersData={offersData} viewType={ViewType.MAIN} openOfferDetail={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<OffersList /> Testing Detail List`, () => {
    const tree = renderer.create(<OffersList offersData={offersData} viewType={ViewType.DETAIL} openOfferDetail={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

