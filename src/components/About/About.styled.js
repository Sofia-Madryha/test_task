import styled from "styled-components";

export const AboutStyled = styled.section`
  margin-top: 48px;
`;

export const Title = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
export const TitleText = styled.h1`
  font-size: 26px;
  line-height: 1.3;
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card1 = styled(Card)`
  position: relative;

  @media only screen and (min-width: 768px) {
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
  }
`;

export const Card2 = styled(Card)`
  position: relative;
  @media only screen and (min-width: 768px) {
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
  }}
`;

export const Card3 = styled(Card)``;

export const Card4 = styled(Card)`
  position: relative;

  @media only screen and (min-width: 768px) {
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
  }}
`;

export const Image = styled.img``;

export const Image3 = styled(Image)``;

export const Description = styled.p`

  font-size: 14px;
  line-height: 1.6;
  text-align: center;
`;
