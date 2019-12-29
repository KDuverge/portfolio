import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 10%;

  & a {
    color: #000;
    font-size: 1.6rem;
    padding: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;

    &.active-link {
      border-bottom: 2px solid
        ${props =>
          props.theme === "green" ? "var(--color-primary-green)" : "#000"};
      font-weight: 600;
    }

    &:hover {
      border-bottom: 2px solid
        ${props =>
          props.theme === "green" ? "var(--color-primary-green)" : "#000"};
    }
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 50rem;
  margin: 0;
`;
