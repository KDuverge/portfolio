import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import { TopLines } from "../AnimatedLines/AnimatedLines";
import Container from "../Container/Container";
import { StateContext } from "../../lib/context";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-gradient: linear-gradient(180deg, #3CAEAD 0%, #173F5F 100%);
    --color-primary-green: rgb(60, 174, 163);
    --color-primary-blue: rgba(23, 63, 95, 1);

    --color-light: #fff;
    --color-grey: #faf3f3;

    --border-grey: #d8d8d8;

    --shadow: 6px 9px 10px rgba(0, 0, 0, 0.25);
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
		height: 100%;
		overflow: hidden;
		background-image: var(--color-primary-gradient);
	}

	body {
		margin: 0;
		font-family: "Red Hat Display", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
	}

	#root {
		height: 100%;
		padding: 2rem;
	}
`;

const InnerWindow = styled.div`
  background: ${props => props.theme.innerBackground};
  background-image: ${props => props.theme.innerBackground};
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  border: 2px solid ${props => props.theme.innerBorder};
  transition: all 0.5s ease;
`;

const OuterWindow = styled.div`
  background-color: ${props => props.theme.outerBackground};
  background-image: ${props => props.theme.outerBackground};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  height: 100%;
  border-radius: 1rem;
  border: 2px solid black;
  padding: 1rem;
  position: relative;
  transition: all 0.5s ease;
  overflow: hidden;
`;

interface PageBaseProps {
  children: JSX.Element[] | JSX.Element;
}

const PageBase = ({ children }: PageBaseProps) => {
  const { theme } = useContext(StateContext);

  return (
    <>
      <GlobalStyle />
      <OuterWindow theme={theme}>
        <TopLines />
        <InnerWindow theme={theme}>
          <Nav theme={theme} />
          <Container>{children}</Container>
        </InnerWindow>
        <Social theme={theme} />
        {/* <BottomLines /> */}
      </OuterWindow>
    </>
  );
};

export default PageBase;
