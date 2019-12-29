import React from "react";
import styled from "styled-components";

import Header from "../components/Header/Header";
import Graphic from "../components/Graphic/Graphic";

const StyledHome = styled.div`
  height: 90rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Graphic />
    </StyledHome>
  );
};

export default Home;
