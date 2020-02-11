import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const houses = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Wonderful hosue for rich people`];

it(`<Main /> Testing`, () => {
  const tree = renderer.create(<Main houses={houses} onTitleButtonClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
