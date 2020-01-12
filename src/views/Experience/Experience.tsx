import React from "react";
import styled, { keyframes } from "styled-components";

import PageTitle from "../../components/PageTitle/PageTitle";
import Point from "./Point";

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
    {
      icon: 'planeOff',
      company: "jetBlue Airways",
      title: "Supervisor Ground Operations",
      time: "April / 2010"
    },
    {
      icon: 'planeLand',
      company: "jetBlue Airways",
      title: "Supervisor Ground Operations",
      time: "April / 2017"
    },
    {
      icon: 'code',
      company: "Self Taught Developer",
      title: "Began Teaching myself how to code",
      time: "November / 2017"
    },
    {
      icon: 'laptop',
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
          {data.map((job, i) => (
            <Point key={i} position={i % 2 === 0 && "bottom"} {...job} />
          ))}
        </Line>
      </ChartContainer>
    </>
  );
};

export default Experience;
