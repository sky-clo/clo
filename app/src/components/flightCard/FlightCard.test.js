import React from "react";
import { shallow } from "enzyme";

import FlightCard from "./FlightCard";

describe("FlightCard", () => {
  it("should match snapshot", () => {
    const render = shallow(
      <FlightCard
        title="London Stansted to Split"
        time="6h 9m"
        price="£41"
        href="/location"
      />
    );
    expect(render).toMatchSnapshot();
  });
});
