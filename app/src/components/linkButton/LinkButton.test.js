import React from "react";
import { shallow } from "enzyme";

import LinkButton from "./LinkButton";

it("LinkButton should render a primary button", () => {
  const render = shallow(
    <LinkButton href="/" className="test" data-test="my-button">
      My Button
    </LinkButton>
  );
  expect(render).toMatchSnapshot();
});

it("LinkButton should render a secondary button", () => {
  const render = shallow(
    <LinkButton href="/" primary={false} className="test" data-test="my-button">
      My Button
    </LinkButton>
  );
  expect(render).toMatchSnapshot();
});
