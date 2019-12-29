import React from "react";
import styled from "styled-components";

import Resume from "../../icons/resume.svg";

const ResumeButton = styled.a`
  width: 14.5rem;
  height: 3.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: var(--color-primary-gradient);
  color: var(--color-light);
  border-radius: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;

  & img {
    margin-right: 1rem;
  }

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.25);
  }
`;

const Button = () => {
  return (
    <ResumeButton>
      <img width="15" src={Resume} alt="Resume" />
      Resume
    </ResumeButton>
  );
};

export default Button;
