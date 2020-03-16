import React from "react";
import styled from "styled-components";

import PageTitle from "../../components/PageTitle/PageTitle";
import Single from "./Single";

import "./Project.scss";

export interface ProjectType {
  _id: string;
  image: string;
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  websiteLink: string;
}

const data: ProjectType[] = [
  {
    _id: "0",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "A Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, beatae!",
    stack: ["html", "css", "js"],
    githubLink: "https://www.google.com",
    websiteLink: "https://www.google.com"
  },
  {
    _id: "1",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "A Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, beatae!",
    stack: ["html", "css", "js"],
    githubLink: "https://www.google.com",
    websiteLink: "https://www.google.com"
  },
  {
    _id: "2",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "A Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, beatae!",
    stack: ["html", "css", "js"],
    githubLink: "https://www.google.com",
    websiteLink: "https://www.google.com"
  },
  {
    _id: "3",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "A Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, beatae!",
    stack: ["html", "css", "js"],
    githubLink: "https://www.google.com",
    websiteLink: "https://www.google.com"
  }
];

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / -2;
  /* grid-row: 1 / -1; */
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, minmax(30rem, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(30rem, 1fr));
  justify-content: space-evenly;
`;

const Project = () => {
  return (
    <>
      <PageTitle color='var(--color-primary-gradient)' title='projects.' />
      <GridContainer>
        {data.map(project => (
          <Single {...project} key={project.title} />
        ))}
      </GridContainer>
    </>
  );
};

export default Project;
