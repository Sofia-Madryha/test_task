import styled from "styled-components";

export const AboutStyled = styled.section`
  margin-top: 48px;
`;

export const AboutContainer = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 0 48px 0 48px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 156px 0 156px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 0;
  }
`;
export const Title = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 420px) {
    gap: 20px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
export const TitleText = styled.h1`
  font-size: 26px;
  line-height: 1.3;
  font-weight: 700;

  @media only screen and (min-width: 420px) {
    font-size: 30px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 36px;
    position: relative;

  &:before {
  content: "";
  display: block;
  width: 238px;
  height: 2px;
  background:linear-gradient(359deg, #EFEBE6, transparent);
  right: 100%;
  margin-right: 16px;
  top: 50%;
  position: absolute;
  }

  &:after {
    content: "";
    display: block;
    width: 238px;
    height: 2px;
    background:linear-gradient(1deg, #EFEBE6, transparent);
    left: 100%;
    margin-left: 16px;
    top: 50%;
    position: absolute;
    }

    @media only screen and (min-width: 1024px) {
      &:before {
        width: 346px;
      }
      &:after {
        width: 346px;
      }
      @media only screen and (min-width: 1440px) {
    
        &:before {
          width: 494px;
        }
        &:after {
          width: 494px;
        }
    }
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;

  @media only screen and (min-width: 420px) {
    gap: 40px;
  }

  @media only screen and (min-width: 768px) {
    gap: 55px;
  }
  @media only screen and (min-width: 1440px) {
    // min-height: 1731px;
    column-gap: 40px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 420px) {
    gap: 30px;
  }
  @media only screen and (min-width: 768px) {
    gap: 55px;
  }

  @media only screen and (min-width: 1440px) {
    height: 557px;
  }
`;

export const Card1 = styled(Card)`
  position: relative;

  @media only screen and (min-width: 1024px) {
    &:before {
      content: " ";
      display: inline-block;
      position: absolute;
      z-index: 99;

      rotate: 320deg;
      left: -36px;
      height: 30px;
      width: 134px;
      transform: skew(20deg);
      border-bottom: 1px solid black;
      border-top: 1px solid black;
    }
    &:after {
      content: " ";
      display: inline-block;
      position: absolute;
      z-index: 99;
      bottom: 155px;
      rotate: 320deg;
      right: -36px;
      height: 30px;
      width: 133px;
      transform: skew(20deg);
      border-bottom: 1px solid black;
      border-top: 1px solid black;
    }

    @media only screen and (min-width: 1440px) {
      gap: 40px;
      margin-bottom: 300px;

      &:after {
        bottom: -185px;
        rotate: 320deg;
        right: -26px;
      }
    }
  }
`;

export const Card2 = styled(Card)`
  position: relative;



  @media only screen and (min-width: 1024px) {
    &:after {
      content: " ";
      display: inline-block;
      position: absolute;
      z-index: 99;
      bottom: 53%;
      rotate: 180deg;
      left: -76px;
      height: 30px;
      width: 133px;
      transform: skew(24deg);
      border-bottom: 1px solid black;
      border-top: 1px solid black;
    }

  @media only screen and (min-width: 1444px) {
    order:2;

    &:after {
      bottom: 45%;
      rotate: 180deg;
      left: 500px;
      right: -196px;
    }
  }
`;

export const Card3 = styled(Card)`
  position: relative;
  @media only screen and (min-width: 1024px) {
    &:after {
      content: " ";
      display: inline-block;
      position: absolute;
      z-index: 99;
      bottom: 132px;
      rotate: 323deg;
      right: -50px;
      height: 30px;
      width: 133px;
      transform: skew(20deg);
      border-bottom: 1px solid black;
      border-top: 1px solid black;
    }
    @media only screen and (min-width: 1440px) {
      margin-top: -300px;
    }
  }
`;

export const Card4 = styled(Card)`
  position: relative;


  @media only screen and (min-width: 1024px) {
    &:after {
      content: " ";
      display: inline-block;
      position: absolute;
      z-index: 99;
      top: 175px;
    rotate: 270deg;
    left: -36px;
      height: 30px;
      width: 134px;
      transform: skew(20deg);
      border-bottom: 1px solid black;
      border-top: 1px solid black;
    }
  @media only screen and (min-width: 1440px) {
    order:4;
    margin-top: -610px;
    gap: 74px;
    &:after {
      top: 930px;
      rotate: 315deg;
      left: 506px;
      
    }
  }
`;

export const Image = styled.img``;

export const Image3 = styled(Image)``;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 565px;
    text-align: center;
    line-height: 1.5;
    font-size: 16px;
  }
  @media only screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const Description4 = styled(Description)`
  @media only screen and (min-width: 1440px) {
    padding-left: 30px;
  }
`;
