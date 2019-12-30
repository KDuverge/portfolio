import React, { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../../lib/context";

const LineContainer = styled.div`
  position: absolute;
  width: 8rem;
  height: 20rem;
  top: ${props => (props.theme === "top" ? 0 : "")};
  left: ${props => (props.theme === "top" ? "8rem" : "")};
  right: ${props => (props.theme !== "top" ? "4rem" : "")};
  bottom: ${props => (props.theme !== "top" ? "0" : "")};
  display: flex;
  justify-content: ${props =>
    props.theme === "top" ? "space-between" : "space-around"};
  align-items: ${props => (props.theme !== "top" ? "flex-end" : "")};

  & * {
    width: 1.7rem;
    background-image: var(--color-primary-gradient);
    border-bottom-right-radius: ${props =>
      props.theme === "top" ? "1rem" : ""};
    border-bottom-left-radius: ${props =>
      props.theme === "top" ? "1rem" : ""};
    border-top-left-radius: ${props => (props.theme !== "top" ? "1rem" : "")};
    border-top-right-radius: ${props => (props.theme !== "top" ? "1rem" : "")};
    transform-origin: top;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

const LineOne = styled.div`
  height: 15rem;
  transform: scaleY(${props => props.theme});
`;

const LineTwo = styled.div`
  height: 10rem;
  transform: scaleY(${props => props.theme});
`;

const LineThree = styled.div`
  height: 20rem;
  transform: scaleY(${props => props.theme});
`;

export const TopLines = () => {
  const state = useContext(StateContext);

  return (
    <LineContainer theme="top">
      <LineOne theme={state[1].y} />
      <LineTwo theme={state[2].y} />
      <LineThree theme={state[3].y} />
    </LineContainer>
  );
};

export const BottomLines = () => {
  const state = useContext(StateContext);

  return (
    <LineContainer>
      <LineTwo theme={state[2].y} />
      <LineThree theme={state[3].y} />
    </LineContainer>
  );
};
