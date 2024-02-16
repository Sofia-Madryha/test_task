import "modern-normalize";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: "Dancing Script", cursive,  "Josefin Sans", sans-serif, "Cinzel", serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    }
    
    h1, h2, h3, h4, p, li
    {
      margin: 0;
    }
    a{
      text-decoration: none;
      color:  ${(p) => p.theme.colors.black};
    }
`;
export const Container = styled.div`
 
      max-width: 1440px;
      padding-right: 120px;
      padding-left: 120px;
    
  
`;
