import styled from "styled-components";

export const HomeStyled = styled.section`
  background-image: url("../images/home/home.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;
  height: 800px;
  width: 1440px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background-position: center;
    z-index: 2;
    top: 0;
    left: 0;
    width: 1440px;
    height: 800px;
    background-image: url("../images/home/overlay.png");
  }
`;
