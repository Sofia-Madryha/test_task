import styled from "styled-components";

export const HomeStyled = styled.section`
  background-image: url("../images/home/home-320.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;
  min-height: 600px;
  position: relative;
  min-width: 320px;


  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url("../images/home/home-640.jpg");
  }
  &:after {
    content: "Health, love, fulfillment of dreams!";
    font-family: "Dancing Script";
    font-size: 36px;
    line-height: 1.2;
    color: white;
    position: absolute;
    z-index: 2;
    top: 15px;
    left: 20px;
    width: 300px;
    rotate: 345deg;
  }


  @media only screen and (min-width: 420px){
    min-height: 700px;
    background-image: url("../images/home/home-420.jpg");
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url("../images/home/home-840.jpg");

    &:after{
      font-size: 40px;
      width: 332px;
    }
  }
  @media only screen and (min-width: 768px){
    min-height: 800px;
    background-image: url("../images/home/home-768.jpg");
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url("../images/home/home-1536.jpg");

    &:after{

        content: "";
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        z-index: 2;
        top: 0;
        left: 0;
        rotate:none;
width: 100%;
        min-height: 800px;
        background-image: url("../images/home/overlay-1077.png");

    }
  }

  @media only screen and (min-width: 1024px){

    background-image: url("../images/home/home-1024.jpg");
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url("../images/home/home-2048.jpg");
    }
   
  }
  @media only screen and (min-width: 1440px){

    background-image: url("../images/home/home-1440.jpg");
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url("../images/home/home-2880.jpg");
    }

  }
  } 
`;
