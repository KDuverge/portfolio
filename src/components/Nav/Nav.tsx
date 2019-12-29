import React from "react";

import { NavLink } from "react-router-dom";

import { StyledNav, StyledUl } from "./StyledNav";

interface NavProps {
  theme: string;
}

const Nav = ({ theme }: NavProps) => {
  const links = ["home", "about", "skills", "experience", "projects"];

  return (
    <StyledNav theme={theme}>
      <StyledUl>
        {links.map(link => (
          <NavLink key={link} to={`/${link}`}>
            {link}.
          </NavLink>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
