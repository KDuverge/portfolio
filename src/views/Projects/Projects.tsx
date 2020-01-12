import React from "react";

import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectSlider from "./ProjectSlider";

import './Project.scss';

export interface ProjectType {
	image: string;
	title: string;
	description: string;
	stack: string[];
	githubLink: string;
	websiteLink: string;
}

const data: ProjectType[] = [
  {
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

const Project = () => {
  return (
    <>
      <PageTitle color="var(--color-primary-gradient)" title="projects." />
      <div style={{ gridColumn: "3 / span 4", gridRow: "2 / span 2" }}>
        <ProjectSlider data={data} />
      </div>
    </>
  );
};

export default Project;
