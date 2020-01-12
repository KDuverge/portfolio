import React from "react";
import styled from "styled-components";

import Icon from "../../components/Icons/Icons";

const SkillsContainer = styled.div`
  grid-column: 2 / span 3;
  grid-row: 1 / span 3;
  height: 50rem;
  width: 50rem;
  align-self: center;
  justify-self: center;
  overflow: hidden;
`;

const SkillsHeader = styled.h4`
  font-size: 3rem;
  margin-bottom: 3rem;
  position: relative;
  text-align: right;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    top: 50%;
    right: 20%;
    background-image: var(--color-primary-gradient);
  }
`;

const ToolsContainer = styled.div`
  grid-column: 5 / span 3;
  grid-row: 1 / span 3;
  height: 50rem;
  width: 50rem;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ToolsHeader = styled.h4`
  font-size: 3rem;
  margin-bottom: 3rem;
  position: relative;
  text-align: left;
  margin-top: 3rem;
  margin-left: 3rem;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    top: 50%;
    left: 30%;
    background-image: var(--color-primary-gradient);
  }
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 15rem);
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 100%;
`;

const ToolStack = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 100%;
`;

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <SkillsHeader>skills.</SkillsHeader>
        <TechStack>
          <Icon src="html" />
          <Icon src="css" />
          <Icon src="sass" />
          <Icon src="js" />
          <Icon src="typescript" />
          <Icon src="reactIcon" />
          <Icon src="redux" />
          <Icon src="mongoDb" />
          <Icon src="mySql" />
          <Icon src="nodeJs" />
          <Icon src="python" />
          <Icon src="graphQl" />
        </TechStack>
      </SkillsContainer>
      <ToolsContainer>
        <ToolStack>
          <Icon src="webpack" />
          <Icon src="git" />
          <Icon src="github" />
          <Icon src="gitlab" />
        </ToolStack>
        <ToolsHeader>tooling.</ToolsHeader>
      </ToolsContainer>
    </>
  );
};

export default Skills;
