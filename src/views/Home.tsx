import React from "react";

import { StyledHome } from "./HomeStyles";
import Header from "../components/Header/Header";
import Graphic from "../components/Graphic/Graphic";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Graphic />
    </StyledHome>
  );
};

export default Home;
