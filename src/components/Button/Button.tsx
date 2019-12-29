import React from "react";

import { StyledButton } from "./StyledButton";

import Resume from "../../icons/resume.svg";

const Button = () => {
  return (
    <StyledButton>
      <img width="15" src={Resume} alt="Resume" />
      Resume
    </StyledButton>
  );
};

export default Button;
