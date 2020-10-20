import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

it("Button should render a primary button", () => {
  const render = shallow(
    <Button
      onClick={() => null}
      className="test"
      type="submit"
      data-test="my-button"
    >
      My Button
    </Button>
  );
  expect(render).toMatchSnapshot();
});

it("Button should render a secondary button", () => {
  const render = shallow(
    <Button
      onClick={() => null}
      primary={false}
      className="test"
      type="submit"
      data-test="my-button"
    >
      My Button
    </Button>
  );
  expect(render).toMatchSnapshot();
});
