import React from "react";
import styled from "styled-components";

import Dev from "../../icons/web-dev.svg";

const Circle = styled.div`
  height: 45rem;
  width: 50rem;
  background-image: var(--color-primary-gradient);
  grid-column: 5 / span 3;
  grid-row: 2 / span 3;
  border-radius: 50%;
  justify-self: center;
  box-shadow: var(--shadow);
`;

const Img = styled.img`
  width: 50rem;
  height: 50rem;
  grid-column: 6 / span 2;
  grid-row: 1 / span 2;
  transform: translateY(4rem);
`;

const Graphic = () => {
  return (
    <>
      <Circle />
      <Img src={Dev} />
    </>
  );
};

export default Graphic;
