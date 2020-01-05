import React from "react";
import styled, { keyframes } from "styled-components";

import Point from "./Point";
import PlaneTakeOff from "../../icons/plane-takeoff.svg";
import PlaneLand from "../../icons/plane-land.svg";
import Code from "../../icons/code.svg";
import Laptop from "../../icons/laptop.svg";

import "./Experience.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

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
    {
      icon: PlaneTakeOff,
      company: "jetBlue Airways",
      title: "Supervisor Ground Operations",
      time: "April / 2010"
    },
    {
      icon: PlaneLand,
      company: "jetBlue Airways",
      title: "Supervisor Ground Operations",
      time: "April / 2017"
    },
    {
      icon: Code,
      company: "Self Taught Developer",
      title: "Began Teaching myself how to code",
      time: "November / 2017"
    },
    {
      icon: Laptop,
      company: "BounceX",
      title: "Software Engineer",
      time: "June / 2018 - Present"
    }
  ];

  return (
    <>
      <PageTitle title="experience." color="var(--color-light)" />
      <ChartContainer>
        <Line className="Line">
          {data.map((num, i) => (
            <Point key={i} position={i % 2 === 0 && "bottom"} {...num} />
          ))}
        </Line>
      </ChartContainer>
    </>
  );
};

export default Experience;
