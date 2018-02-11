import React from "react";
import renderer from "react-test-rendered";
import ColorCardList from "./Components/ColorCardList.react";
import ColorCard from "./Components/ColorCard.react";
import App from "./Components/App";

test(`<App /> should render with reuired props`, () => {
  const app = renderer.create(<App info={() => 1} images={{}} />).toJSON();
  expect(app).toMatchSnapshot();
});
