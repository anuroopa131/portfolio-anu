// createGlobalStyle is a special export from styled-components for CSS that
// should apply site-wide (body, *, html) rather than one component.
// It still reads `theme` the same way any styled-component does, so the
// body background/text color flips automatically when the theme changes.

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  h1, h2, h3 {
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
