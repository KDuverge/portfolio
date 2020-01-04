import React from "react";
import styled from "styled-components";

import Css from "../../icons/css.svg";
import Git from "../../icons/git.svg";
import Github from "../../icons/github.svg";
import Gitlab from "../../icons/gitlab.svg";
import Html from "../../icons/html.svg";
import JS from "../../icons/js.svg";
import MongoDB from "../../icons/mongodb.svg";
import MySQL from "../../icons/mysql.svg";
import NodeJS from "../../icons/nodejs.svg";
import Python from "../../icons/python.svg";
import ReactIcon from "../../icons/react.svg";
import Redux from "../../icons/redux.svg";
import Sass from "../../icons/sass.svg";
import Typescript from "../../icons/typescript.svg";
import GraphQL from "../../icons/graphql.svg";
import Webpack from "../../icons/webpack.svg";

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

export const Icon = styled.img`
  width: 7rem;
  height: 7rem;
  transform-origin: top;
  transition: transform 0.2s ease;

  &:hover {
    transform: rotateX(-45deg);
  }
`;

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <SkillsHeader>skills.</SkillsHeader>
        <TechStack>
          <Icon src={Html} />
          <Icon src={Css} />
          <Icon src={Sass} />
          <Icon src={JS} />
          <Icon src={Typescript} />
          <Icon src={ReactIcon} />
          <Icon src={Redux} />
          <Icon src={MongoDB} />
          <Icon src={MySQL} />
          <Icon src={NodeJS} />
          <Icon src={Python} />
          <Icon src={GraphQL} />
        </TechStack>
      </SkillsContainer>
      <ToolsContainer>
        <ToolStack>
          <Icon src={Webpack} />
          <Icon src={Git} />
          <Icon src={Github} />
          <Icon src={Gitlab} />
        </ToolStack>
        <ToolsHeader>tooling.</ToolsHeader>
      </ToolsContainer>
    </>
  );
};

export default Skills;
