import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  it("should match snapshot", () => {
    const render = shallow(<Header />);
    expect(render).toMatchSnapshot();
  });
});
