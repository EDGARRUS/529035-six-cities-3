import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const houses = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Wonderful hosue for rich people`];

it(`<App /> Testing`, () => {
  const tree = renderer.create(<App houses={houses} onTitleButtonClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
