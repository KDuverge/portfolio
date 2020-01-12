import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import styled from 'styled-components';

import Single from "./Single";
import { ProjectType } from "./Projects";
import { SmallIcon } from "../../components/Icons/Icons";

interface ProjectSliderProps {
  data: ProjectType[] | null;
}

const NoProjects = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-green);
  font-size: 4rem;
  font-weight: bold;
`;

const ProjectSlider = ({ data }: ProjectSliderProps) => {
  const [dots, setDots] = useState(0);

  if (!data) {
    return <NoProjects>No Projects currently...</NoProjects>;
  }
  return (
    <>
      <Carousel
        value={dots}
        onChange={setDots}
        centered
        infinite
        arrows
        slidesPerPage={2}
        arrowLeft={<SmallIcon src="leftArrow" />}
        arrowRight={<SmallIcon src="rightArrow" />}
        addArrowClickHandler
      >
        {data.map((single, i) => (
          <Single key={i} {...single} />
        ))}
      </Carousel>
      <Dots value={dots} onChange={setDots} number={data.length} />
    </>
  );
};

export default ProjectSlider;
