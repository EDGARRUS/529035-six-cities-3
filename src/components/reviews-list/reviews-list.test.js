import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";
import {offersData} from "../../mocks/offers";

it(`<ReviewsList /> Testing`, () => {
  const tree = renderer.create(<ReviewsList reviewsId={offersData[1].reviewsId}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
