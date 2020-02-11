import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const houses = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Wonderful hosue for rich people`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Кнопка должна быть нажата`, () => {
  const onTitleButtonClick = jest.fn();

  const mainScreen = shallow(
      <Main
        houses={houses}
        onTitleButtonClick={onTitleButtonClick}
      />
  );

  const titleButtons = mainScreen.find(`h3`);
  titleButtons.forEach((title) => title.simulate(`click`));

  expect(onTitleButtonClick).toHaveBeenCalledTimes(titleButtons.length);
});
