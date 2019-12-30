import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 90rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
`;

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
