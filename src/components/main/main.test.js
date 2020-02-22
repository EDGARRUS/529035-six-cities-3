import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {offersData} from "../../mocks/offers";
import {ViewType} from "../../const";

it(`<Main /> Testing`, () => {
  const tree = renderer.create(<Main offersData={offersData} viewType={ViewType.MAIN} openOfferDetail={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
