import React from "react";
import styled from "styled-components";

import Me from "../../images/KLove.jpg";

const ImageContainer = styled.div`
  height: 30rem;
  width: 28rem;
  grid-column: 3 / span 2;
  grid-row: 2 / span 2;
  justify-self: center;
  position: relative;
  z-index: 5;
  box-shadow: var(--shadow);

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    top: -2rem;
    left: 2rem;
    z-index: -1;
    box-shadow: var(--shadow);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Headshot = () => {
  return (
    <ImageContainer>
      <Image src={Me} />
    </ImageContainer>
  );
};

export default Headshot;
