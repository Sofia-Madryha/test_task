import styled from "styled-components";

export const AboutStyled = styled.section``;

export const Title = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 60px;
`;
export const TitleText = styled.h1`
  font-size: 36px;
  line-height: 1.2;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Card1 = styled.li`
  position: relative;

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
    bottom: 15px;
    rotate: 320deg;
    right: -36px;
    height: 30px;
    width: 134px;
    transform: skew(20deg);
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }
`;

export const Card2 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 60px;

  position: relative;
  &:after {
    content: " ";
    display: inline-block;
    position: absolute;
    z-index: 99;
    bottom: 42%;
    rotate: 270deg;
    right: -36px;
    height: 30px;
    width: 134px;
    transform: skew(32deg);
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }
`;

export const Card3 = styled.li``;

export const Card4 = styled.li`
  position: relative;

  &:after {
    content: " ";
    display: inline-block;
    position: absolute;
    z-index: 99;
    bottom: 20px;
    rotate: 315deg;
    right: -36px;
    height: 30px;
    width: 134px;
    transform: skew(20deg);
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }
`;

export const Image = styled.img``;

export const Image3 = styled(Image)`
  margin: 44px 0 55px 0;
`;

export const Description = styled.p`
  width: 508px;
  font-size: 16px;
  line-height: 1.5;
`;
