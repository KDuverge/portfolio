import React, { useState } from "react";
import styled from "styled-components";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

const Project = styled.div`
  height: 40rem;
  width: 25rem;
  background-color: white;
  border: 1px solid black;
  margin-right: 5rem;
`;

const ProjectSlider = () => {
  const [dots, setDots] = useState(0);

  return (
    <>
      <Carousel
        value={dots}
        onChange={setDots}
        centered
        infinite
        arrows
        slidesPerPage={2}
      >
        <Project>1</Project>
        <Project>2</Project>
        <Project>3</Project>
        <Project>4</Project>
      </Carousel>
      <Dots value={dots} onChange={setDots} number={4} />
    </>
  );
};

export default ProjectSlider;
