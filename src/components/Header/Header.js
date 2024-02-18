import { Container } from "../GlobalStyle";
import {
  BurgerButtton,
  BurgerMenu,
  Button,
  HeaderContainer,
  HeaderStyled,
  Logo,
  LogoSvg,
  NavItem,
  NavLink,
  Navigation,
  NavigationList,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo>
            <LogoSvg>
              <a href="#home">
                <use href="../images/icons.svg#logo"></use>{" "}
              </a>
            </LogoSvg>
          </Logo>
          <BurgerMenu>
            <BurgerButtton type="button">
              <svg width="28" height="28">
                <use
                  stroke="rgba(46, 47, 66, 1)"
                  href="../images/icons.svg#burger-menu"
                ></use>
              </svg>
            </BurgerButtton>
          </BurgerMenu>
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
              <NavItem>
                <NavLink href="#contact">CONTACT</NavLink>
              </NavItem>
            </NavigationList>
          </Navigation>{" "}
          <Button type="button">Book</Button>{" "}
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};
