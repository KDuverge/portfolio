import React from "react";
import styled, { keyframes } from "styled-components";
import { ProjectType } from "./Projects";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SingleContainer = styled.div`
  height: 30rem;
  background-image: var(--color-primary-gradient);
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow);
  transition: all 2s ease;
  animation: ${fadeIn} 1s ease-in forwards;
  animation-delay: ${props => props.theme}99ms;
  opacity: 0;

  &:hover {
    transform: rotateY(180deg);
    box-shadow: none;
  }
`;

const SingleImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Single = ({ title, image, _id }: ProjectType) => {
  return (
    <SingleContainer theme={_id}>
      <SingleImageContainer>
        <img src={image} alt={title} />
      </SingleImageContainer>
    </SingleContainer>
  );
};

export default Single;
