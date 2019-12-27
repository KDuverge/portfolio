import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import App from "./App";

describe("<App />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders", () => {
    expect(wrapper).toBeDefined();
  });
});
