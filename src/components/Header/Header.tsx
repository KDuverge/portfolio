import React from "react";
import styled from "styled-components";

import ResumeButton from "../Button/Button";

const HeaderContainer = styled.div`
  grid-column: 2 / span 3;
  grid-row: 2 / span 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Name = styled.h1`
  font-weight: bolder;
  font-size: 4.8rem;
`;

const Paragraph = styled.p`
  color: ${props =>
    props.title === "title" ? "var(--color-primary-green)" : "#000"};
  font-size: 1.6rem;
	font-weight: ${props => (props.title === "title" ? "800" : "400")};
	letter-spacing: .5px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Name>Kenneth Duverge.</Name>
      <Paragraph title="title">I'm a full stack web developer.</Paragraph>
      <Paragraph>Specializing in all things web development.</Paragraph>
      <ResumeButton />
    </HeaderContainer>
  );
};

export default Header;
