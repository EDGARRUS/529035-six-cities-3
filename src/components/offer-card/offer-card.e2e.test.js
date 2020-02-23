import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {offersData} from "../../mocks/offers";
import {ViewType} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test click on Offer Card`, () => {
  it(`Сработал обработчик по клику на Title на MAIN`, () => {
    const titleClickHandler = jest.fn();

    const offerCard = shallow(<OfferCard offerData={offersData[1]} viewType={ViewType.MAIN} titleClickHandler={titleClickHandler}/>
    );

    offerCard.find(`.place-card__name a`).simulate(`click`);
    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Сработал обработчик по клику на Title на DETAIL`, () => {
    const titleClickHandler = jest.fn();

    const offerCard = shallow(<OfferCard offerData={offersData[1]} viewType={ViewType.DETAIL} titleClickHandler={titleClickHandler}/>
    );

    offerCard.find(`.place-card__name a`).simulate(`click`);
    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });
});


