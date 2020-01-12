import React from "react";
import styled, { keyframes } from "styled-components";

interface PageTitleProps {
  title: string;
  color: string;
}

const fadeDown = keyframes`
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const StyledPageTitle = styled.div`
  grid-column: 4 / span 2;
  grid-row: 1 / 1;
  justify-self: center;
  align-self: start;
  font-size: 2.4rem;
  color: ${props => props.color};
  position: relative;
  opacity: 0;
  transform: translateY(-10rem);
  animation: ${fadeDown} 1s ease-in-out forwards;

  &::before,
  &::after {
    content: "";
    height: 0.2rem;
		background-color: ${props => props.color};
		background-image: ${props => props.color};
    position: absolute;
    top: 50%;
    width: 20rem;
  }

  &::before {
    right: 15rem;
  }

  &::after {
    left: 15rem;
  }
`;

const PageTitle = ({ title, color }: PageTitleProps) => {
  return <StyledPageTitle color={color}>{title}</StyledPageTitle>;
};

export default PageTitle;
