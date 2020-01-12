import React from "react";
import styled, { keyframes } from "styled-components";

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

import PlaneTakeOff from "../../icons/plane-takeoff.svg";
import PlaneLand from "../../icons/plane-land.svg";
import Code from "../../icons/code.svg";
import Laptop from "../../icons/laptop.svg";

import RightArrow from "../../icons/right-arrow.svg";
import LeftArrow from "../../icons/left-arrow.svg";

const IconMap: any = {
  html: Html,
  css: Css,
  git: Git,
  github: Github,
  gitlab: Gitlab,
  js: JS,
  mongoDb: MongoDB,
  mySql: MySQL,
  nodeJs: NodeJS,
  python: Python,
  reactIcon: ReactIcon,
  redux: Redux,
  sass: Sass,
  typescript: Typescript,
  graphQl: GraphQL,
  webpack: Webpack,
  planeOff: PlaneTakeOff,
  planeLand: PlaneLand,
  code: Code,
  laptop: Laptop,
  rightArrow: RightArrow,
  leftArrow: LeftArrow
};

const StyledIcon = styled.img`
  width: 7rem;
  height: 7rem;
  transform-origin: top;
  transition: transform 0.2s ease;

  &:hover {
    transform: rotateX(-45deg);
  }
`;

interface IconProps {
  src: string;
  position?: string | false;
}

export const MediumIcon = ({ src }: IconProps) => {
  return <StyledIcon src={IconMap[src]} />;
};

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

const StyledLargeIcon = styled.img<IconProps>`
  height: 9rem;
  width: 9rem;
  position: absolute;
  opacity: 0;
  transform: translateX(-50px);
  top: ${props => (props.position !== "bottom" ? "60px" : "-125px")};
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

export const LargeIcon = ({ src, position }: IconProps) => {
  return <StyledLargeIcon src={IconMap[src]} position={position} />;
};

const StyledSmallIcon = styled.img`
  width: 3rem;
`;

export const SmallIcon = ({ src }: IconProps) => {
  return <StyledSmallIcon src={IconMap[src]} />;
};

export default MediumIcon;
