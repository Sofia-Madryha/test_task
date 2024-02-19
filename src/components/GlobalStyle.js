import "modern-normalize";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: "Cinzel", serif;
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
      cursor:pointer;
    }
`;
export const Container = styled.div`
  min-width: 320px;
  max-width: 360px;
  padding: 0 20px 0 20px;
  margin: 0 auto;

  @media only screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 40px 0 40px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 60px 0 60px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 120px 0 120px;
  }
`;
