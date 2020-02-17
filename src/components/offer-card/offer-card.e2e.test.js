import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {offersData} from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Сработал обработчик по клику на Title`, () => {
  const titleClickHandler = jest.fn();

  const offerCard = shallow(<OfferCard offerData={offersData[1]} titleClickHandler={titleClickHandler}/>
  );

  offerCard.find(`.place-card__name a`).simulate(`click`);
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
