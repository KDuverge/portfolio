import React from "react";
import styled from "styled-components";

const CopyContainer = styled.aside`
  grid-column: 5 / span 3;
  grid-row: 2 / span 2;
  
  text-align: left;
  color: var(--color-light);
	display: flex;
	justify-self: center;
	flex-direction: column;
	overflow: hidden;
	width: 40rem;
`;

const CopyHeader = styled.h4`
	font-size: 3rem;
	margin-bottom: 3rem;
	position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    top: 50%;
    left: 30%;
		background-color: var(--color-light);
  }
`;

const CopyParagraph = styled.p`
	line-height: 3rem;
  letter-spacing: .2rem;
	font-size: 1.8rem;
`;

const Copy = () => {
  return (
    <CopyContainer>
      <CopyHeader>about.</CopyHeader>
      <CopyParagraph>
        I am a fullstack developer, specializing in all things web development.
        I am a self taught developer that has a passion in problem solving and
        learning new technologies. I enjoy working in a collaborative
        environment as well as on my own.
      </CopyParagraph>
    </CopyContainer>
  );
};

export default Copy;
