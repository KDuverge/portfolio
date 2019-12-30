import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { DispatchContext } from "../../lib/context";
import { ThemeIF } from '../../lib/reducer';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 10%;
  transition: all .2s ease;

  & a {
    color: ${props => props.theme.navColor};
    font-size: 1.6rem;
    padding: 1rem;
    text-decoration: none;
    transition: all 0.5s ease;

    &.active-link {
      border-bottom: 2px solid ${props => props.theme.navUnderline};
      font-weight: 600;
    }

    &:hover {
      border-bottom: 2px solid ${props => props.theme.navUnderline};
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 50rem;
  margin: 0;
`;

interface NavProps {
  theme: ThemeIF;
}

const Nav = ({ theme }: NavProps) => {
  const { dispatch } = useContext(DispatchContext);

  const links = [
    { text: "home.", path: "/home", lineAnimationState: 1 },
    { text: "about.", path: "/about", lineAnimationState: 2 },
    { text: "skills.", path: "/skills", lineAnimationState: 1 },
    { text: "experience.", path: "/experience", lineAnimationState: 2 },
    { text: "projects.", path: "/projects", lineAnimationState: 1 }
  ];

  return (
    <StyledNav theme={theme}>
      <StyledUl>
        {links.map(link => (
          <NavLink
            onClick={() => dispatch({ type: link.lineAnimationState })}
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
