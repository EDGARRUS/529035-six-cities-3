import React from "react";
import renderer from "react-test-renderer";
import {Review} from "./review.jsx";
import {reviewsData} from "../../mocks/reviews";

it(`<Review /> Testing`, () => {
  const tree = renderer.create(<Review reviewData={reviewsData[1]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
