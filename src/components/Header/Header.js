import { Container } from "../GlobalStyle";
import {
  Button,
  HeaderStyled,
  Logo,
  NavItem,
  NavLink,
  Navigation,
  NavigationList,
} from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Logo>
          <a href="#home">
            <img src="../images/logo.svg" width={150} height={60} alt="logo" />
          </a>
        </Logo>
        <Navigation>
          <NavigationList>
            <NavItem>
              <NavLink href="#home">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">OFFERING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">EXPERIANCE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">ABOUT</NavLink>
            </NavItem>
          </NavigationList>
        </Navigation>
        <Button type="button">Book</Button>
      </HeaderStyled>
    </Container>
  );
};
