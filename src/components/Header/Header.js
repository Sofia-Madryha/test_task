import { Container } from "../GlobalStyle";
import {
  BurgerButtton,
  BurgerMenu,
  Button,
  HeaderStyled,
  Logo,
  Mobile,
  NavItem,
  NavLink,
  Navigation,
  NavigationList,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      {" "}
      <Container>
        <Logo>
          <a href="#home">
            <svg width="101" height="40">
              <use href="../images/icons.svg#logo"></use>
            </svg>
          </a>
        </Logo>
        {/* <Mobile>
          <BurgerMenu>
            <BurgerButtton type="button">
              <svg width="25" height="22">
                <use
                  stroke="rgba(46, 47, 66, 1)"
                  href="../images/icons.svg#burger-menu"
                ></use>
              </svg>
            </BurgerButtton>
          </BurgerMenu>
        </Mobile> */}
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
          <Button type="button">Book</Button>
        </Navigation>{" "}
      </Container>
    </HeaderStyled>
  );
};
