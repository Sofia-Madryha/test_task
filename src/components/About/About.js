import { Container } from "../GlobalStyle";
import {
  AboutContainer,
  AboutStyled,
  Card1,
  Card2,
  Card3,
  Card4,
  Description,
  Description4,
  Image,
  Image1,
  Image3,
  List,
  Subtitle,
  Title,
  TitleText,
} from "./About.styled";

export const About = () => {
  return (
    <AboutStyled id="about">
      <Container>
        {" "}
        <AboutContainer>
        <Title>
          <TitleText>About Us</TitleText>
          <Subtitle>
            {" "}
            Brief description if you want to know more about us
          </Subtitle>
        </Title>{" "}
        <List>
          <Card1>
            <Image
              alt="photo"
              src="../images/about/img1-280.jpg"
              srcSet="../images/about/img1-280.jpg 280w,
            ../images/about/img1-380.jpg 380w,
            ../images/about/img1-560.jpg 560w,
            ../images/about/img1-594.jpg 594w,
            ../images/about/img1-595.jpg 595w,
            ../images/about/img1-760.jpg 760w,
            ../images/about/img1-1188.jpg 1188w,
            ../images/about/img1-1190.jpg 1190w,
          "
              sizes="(min-width: 1440px) 595px, (min-width: 768px) 594px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></Image>
            <Description>
              "From our initial conversation, I knew I had found a gem." <br/> "Ariel
              is THE BEST, and her work is INCREDIBLE." <br/>I CREATE TIMELESS,
              PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </Description>
          </Card1>
          <Card2>
            <Image
              alt="photo"
              src="../images/about/img2-280.jpg"
              srcSet="../images/about/img2-280.jpg 280w,
            ../images/about/img2-380.jpg 380w,
            ../images/about/img2-560.jpg 560w,
            ../images/about/img2-565.jpg 565w,
            ../images/about/img2-760.jpg 760w,
            ../images/about/img2-1130.jpg 1130w,
          "
              sizes=" (min-width: 768px) 565px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></Image>

<Description>
              "From our initial conversation, I knew I had found a gem." <br/> "Ariel
              is THE BEST, and her work is INCREDIBLE." <br/>I CREATE TIMELESS,
              PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </Description>
          </Card2>
          <Card3>
        
            <Image3
              alt="photo"
              src="../images/about/img3-280.jpg"
              srcSet="../images/about/img3-280.jpg 280w,
            ../images/about/img3-380.jpg 380w,
            ../images/about/img3-560.jpg 560w,
            ../images/about/img3-565.jpg 565w,
            ../images/about/img3-760.jpg 760w,
            ../images/about/img3-1130.jpg 1130w,
          "
              sizes=" (min-width: 768px) 565px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></Image3>
              <Description>
              "From our initial conversation, I knew I had found a gem." <br/> "Ariel
              is THE BEST, and her work is INCREDIBLE." <br/>I CREATE TIMELESS,
              PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </Description>
          </Card3>
          <Card4>
          <Description4>
              "From our initial conversation, I knew I had found a gem." <br/> "Ariel
              is THE BEST, and her work is INCREDIBLE." <br/>I CREATE TIMELESS,
              PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </Description4>
            <Image
              alt="photo"
              src="../images/about/img4-280.jpg"
              srcSet="../images/about/img4-280.jpg 280w,
            ../images/about/img4-380.jpg 380w,
            ../images/about/img4-560.jpg 560w,
            ../images/about/img4-594.jpg 594w,
            ../images/about/img4-760.jpg 760w,
            ../images/about/img4-1188.jpg 1188w,
          "
              sizes="(min-width: 1440px) 595px,  (min-width: 768px) 594px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></Image>
          </Card4>
        </List>
        </AboutContainer>
      </Container>
    </AboutStyled>
  );
};
