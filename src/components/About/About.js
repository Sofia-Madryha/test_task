import { Container } from "../GlobalStyle";
import {
  AboutStyled,
  Card1,
  Card2,
  Card3,
  Card4,
  Description,
  Image,
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
            src="../images/about/photo1.jpg"
            width={595}
            height={743}
          ></Image>
        </Card1>
        <Card2>
          <Image
            alt="photo"
            src="../images/about/photo2.jpg"
            width={565}
            height={397}
          ></Image>
          <Description>
            "From our initial conversation, I knew I had found a gem." "Ariel is
            THE BEST, and her work is INCREDIBLE." I CREATE TIMELESS, PERSONAL,
            ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
          </Description>
          <Description>
            "From our initial conversation, I knew I had found a gem." "Ariel is
            THE BEST, and her work is INCREDIBLE." I CREATE TIMELESS, PERSONAL,
            ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
          </Description>
        </Card2>
        <Card3>
          <Description>
            "From our initial conversation, I knew I had found a gem." "Ariel is
            THE BEST, and her work is INCREDIBLE." I CREATE TIMELESS, PERSONAL,
            ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
          </Description>
          <Image3
            alt="photo"
            src="../images/about/photo3.jpg"
            width={565}
            height={480}
          ></Image3>
          <Description>
            "From our initial conversation, I knew I had found a gem." "Ariel is
            THE BEST, and her work is INCREDIBLE." I CREATE TIMELESS, PERSONAL,
            ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
          </Description>
        </Card3>
        <Card4>
          <Image
            alt="photo"
            src="../images/about/photo4.jpg"
            width={595}
            height={800}
          ></Image>
        </Card4>
      </List>
      </Container>
    </AboutStyled>
  );
};
