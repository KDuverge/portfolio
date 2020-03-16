import React from "react";
import { BottomLines } from "./AnimatedLines";
import { ShallowWrapper, shallow } from "enzyme";

describe("AnimatedLines", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<BottomLines />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render", () => {
    expect(wrapper).toBeDefined();
  });
});
