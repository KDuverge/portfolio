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

const fadeWorkIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
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

interface WorkProps {
  position?: string | false;
}

const Work = styled.div<WorkProps>`
  height: 10rem;
  width: 15rem;
  border-radius: 1rem;
  background: var(--color-light);
  position: absolute;
  top: ${props => (props.position === "bottom" ? "4rem" : "-12rem")};
  left: 50%;
  transform: translateX(-50%)
    ${props => (props.position === "bottom" ? "" : "rotateZ(180deg)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: 0;
  animation: ${fadeWorkIn} 0.5s ease-in forwards;

  & div:last-child {
    transform: ${props =>
      props.position === "bottom" ? "" : "rotateZ(180deg)"};
    width: 100%;
  }
`;

const Caret = styled.div`
  background: var(--color-light);
  height: 2rem;
  width: 2rem;
  transform: rotate(45deg) translateX(-50%);
  border-radius: 0.4rem;
  position: relative;
  bottom: 0.9rem;
  align-self: baseline;
  left: 50%;
`;

const Company = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

interface PointProps {
  position: string | false;
  icon: string;
  company: string;
  title: string;
  time: string;
}

interface IconProps {
  position?: string | false;
}

const ExperienceIcon = styled.img<IconProps>`
  height: 9rem;
  width: 9rem;
  position: absolute;
  opacity: 0;
  transform: translateX(-50px);
  top: ${props => (props.position !== "bottom" ? "60px" : "-125px")};
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

const Point = ({ position, icon, title, company, time }: PointProps) => {
  return (
    <>
      <StyledPoint>
        <ExperienceIcon position={position} src={icon} />
        <StyledInnerPoint />
        <Work position={position}>
          <Caret />
          <Company>
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              {company}
            </strong>
            {title}
            <strong
              style={{ display: "block", fontSize: "1rem", textAlign: "right" }}
            >
              {time}
            </strong>
          </Company>
        </Work>
      </StyledPoint>
    </>
  );
};

export default Point;
