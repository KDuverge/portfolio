import React from "react";
import styled, { keyframes } from "styled-components";

import Point from "./Point";
import PlaneTakeOff from "../../icons/plane-takeoff.svg";
import PlaneLand from "../../icons/plane-land.svg";
import Code from "../../icons/code.svg";
import Laptop from "../../icons/laptop.svg";

import "./Experience.scss";

const ChartContainer = styled.div`
  grid-column: 2 / -2;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    transform: translateX(-150rem);
  }

  to {
    transform: translateX(0rem);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1.2rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
  background-color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateX(-150rem);
  animation: ${fadeIn} 4s linear forwards;
`;

const Experience = () => {
  const data = [
    { position: "bottom", icon: PlaneTakeOff },
    { position: "top", icon: PlaneLand },
    { position: "bottom", icon: Code },
    { position: "top", icon: Laptop }
  ];

  return (
    <ChartContainer>
      <Line className="Line">
        {data.map((num, i) => (
          <Point key={i} position={num.position} icon={num.icon} />
        ))}
      </Line>
    </ChartContainer>
  );
};

export default Experience;
