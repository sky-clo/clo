import React from "react";
import { shallow } from "enzyme";

import Hero from "./Hero";

describe("Hero", () => {
  it("should match snapshot", () => {
    const render = shallow(
      <Hero
        image="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt556529d1b8bf298d/5edfe30f98e62f38ec84dadd/2020_Sky_Logo.png"
        title="Sky"
        description="Europe’s leading direct-to-consumer media and entertainment company"
      />
    );
    expect(render).toMatchSnapshot();
  });
});
