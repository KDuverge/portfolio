import React from "react";
import styled from "styled-components";
import { ProjectType } from "./Projects";
import { SmallIcon } from "../../components/Icons/Icons";

const SingleContainer = styled.div`
  height: 50rem;
  width: 30rem;
  background-image: var(--color-primary-gradient);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  box-shadow: var(--shadow);
`;

const SingleImageContainer = styled.div`
  width: 27rem;
  height: 18rem;
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const SingleTitleContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  color: var(--color-light);
  font-weight: bold;
`;

const SingleLinksContainer = styled.div`
  width: 10rem;
  height: 5rem;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  justify-content: space-evenly;
`;

const SingleDescriptionContainer = styled.div`
  font-size: 1.5rem;
  color: white;
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SingleStackContainer = styled.div`
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  & > * {
    margin-right: 3rem;
    align-self: baseline;
  }
`;

const Single = ({
  title,
  description,
  githubLink,
  websiteLink,
  stack,
  image
}: ProjectType) => {
  return (
    <SingleContainer>
      <SingleImageContainer>
        <img src={image} alt={title} />
      </SingleImageContainer>
      <SingleTitleContainer>
        {title}
        <SingleLinksContainer>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <SmallIcon src="github" />
          </a>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <SmallIcon src="code" />
          </a>
        </SingleLinksContainer>
      </SingleTitleContainer>
      <SingleDescriptionContainer>{description}</SingleDescriptionContainer>
      <SingleStackContainer>
        {stack.map((s, i) => (
          <SmallIcon key={i} src={s} />
        ))}
      </SingleStackContainer>
    </SingleContainer>
  );
};

export default Single;
