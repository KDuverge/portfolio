import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { StyledNav, StyledUl } from "./StyledNav";
import { DispatchContext } from "../../lib/context";

interface NavProps {
  theme: string;
}

const Nav = ({ theme }: NavProps) => {
	const {dispatch} = useContext(DispatchContext);
	
  const links = [
    { text: "home.", path: "/home", lineAnim: 1 },
    { text: "about.", path: "/about", lineAnim: 2 },
    { text: "skills.", path: "/skills", lineAnim: 1 },
    { text: "experience.", path: "/experience", lineAnim: 2 },
    { text: "projects.", path: "/projects", lineAnim: 1 }
  ];

  return (
    <StyledNav theme={theme}>
      <StyledUl>
        {links.map(link => (
          <NavLink
            onClick={() => dispatch({ type: link.lineAnim })}
            activeClassName="active-link"
            key={link.text}
            to={link.path}
          >
            {link.text}
          </NavLink>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
