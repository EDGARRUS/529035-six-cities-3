import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {offersData} from "../../mocks/offers";
import {ViewType} from "../../const";

describe(`Render Offer Card`, () => {
  it(`<OfferCard /> Testing card on MAIN`, () => {
    const tree = renderer.create(<OfferCard offerData={offersData[1]} viewType={ViewType.MAIN} titleClickHandler={()=>{}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<OfferCard /> Testing card on DETAIL`, () => {
    const tree = renderer.create(<OfferCard offerData={offersData[1]} viewType={ViewType.DETAIL} titleClickHandler={()=>{}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

