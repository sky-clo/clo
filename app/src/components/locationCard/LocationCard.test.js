import React from "react";
import { shallow } from "enzyme";

import LocationCard from "./LocationCard";

describe("LocationCard", () => {
  it("should match snapshot", () => {
    const render = shallow(
      <LocationCard
        name="London"
        imgSrc="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt556529d1b8bf298d/5edfe30f98e62f38ec84dadd/2020_Sky_Logo.png"
      />
    );
    expect(render).toMatchSnapshot();
  });
});
