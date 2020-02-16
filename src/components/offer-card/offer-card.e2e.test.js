import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {offersData} from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`При наведении активный оффер передается в листинг`, () => {
  let offer = null;
  function onMouseOverCardHandler(data) {
    offer = data;
  }
  const offerCard = shallow(<OfferCard offerData={offersData[1]} mouseOverCardHandler={onMouseOverCardHandler}/>
  );

  offerCard.find(`.place-card`).simulate(`mouseover`);
  expect(offer).not.toBeNull();
});
