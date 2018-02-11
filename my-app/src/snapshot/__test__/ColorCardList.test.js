import React from "react";
import ColorCardList from "../../Components/ColorCard";
import renderer from "react-test-renderer";

it("renders ColorCards", () => {
  const component = renderer.create(<ColorCardList info={() => 3} />);
  expect(component).toMatchSnapshot();
});
