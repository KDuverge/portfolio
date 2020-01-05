import React from "react";

import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectSlider from "./ProjectSlider";

const Project = () => {
  return (
    <>
      <PageTitle color="var(--color-primary-gradient)" title="projects." />
      <div style={{ gridColumn: "3 / span 4", gridRow: "2 / span 2" }}>
        <ProjectSlider />
      </div>
    </>
  );
};

export default Project;
