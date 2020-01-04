import React from "react";
import styled, { keyframes } from "styled-components";

const bounceIn = keyframes`
	0% {
		opacity: 0;
		transform: scale(0)
	}

	80% {
		opacity: 1;
		transform: scale(1.2);
	}

	100% {
		opacity: 1;
		transform: scale(1)
	}
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateX(-50px);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

const StyledPoint = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: var(--color-light);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation-name: ${bounceIn};
`;

const StyledInnerPoint = styled.span`
  border-radius: 50%;
  height: 1.2rem;
  width: 1.2rem;
  background: var(--color-primary-blue);
`;

const Work = styled.div`
  height: 10rem;
  width: 15rem;
  border-radius: 1rem;
  background: var(--color-light);
  position: absolute;
  top: ${props => (props.theme === "bottom" ? "4rem" : "-12rem")};
  left: 50%;
  transform: translateX(-50%)
    ${props => (props.theme === "bottom" ? "" : "rotateZ(180deg)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	padding: 1rem;
	opacity: 0;
  animation: ${fadeIn} 0.5s ease-in;

  & div:last-child {
    transform: ${props => (props.theme === "bottom" ? "" : "rotateZ(180deg)")};
  }
`;

const Caret = styled.div`
  background: var(--color-light);
  height: 2rem;
  width: 5rem;
  transform: rotate(45deg) translateX(-50%);
  border-radius: 0.6rem;
  position: relative;
  bottom: 0;
  align-self: baseline;
  left: 50%;
`;

const Company = styled.div`
  align-self: center;
`;

interface PointProps {
  position: string;
  icon: string;
}

const ExperienceIcon = styled.img`
  height: 9rem;
  width: 9rem;
  position: absolute;
  opacity: 0;
  transform: translateX(-50px);
  top: ${props => (props.theme !== "bottom" ? "60px" : "-125px")};
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

const Point = ({ position, icon }: PointProps) => {
  return (
    <>
      <StyledPoint>
        <ExperienceIcon theme={position} src={icon} />
        <StyledInnerPoint />
        <Work theme={position}>
          <Caret />
          <Company>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            tempora.
          </Company>
        </Work>
      </StyledPoint>
    </>
  );
};

export default Point;
