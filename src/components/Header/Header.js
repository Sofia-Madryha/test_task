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
    <HeaderStyled>
      <Logo>
        <img src="../images/logo.svg" width={150} height={60} alt="logo"/>
      </Logo>
      <Navigation>
        <NavigationList>
          <NavItem>
            <NavLink href="#">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">OFFERING</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">EXPERIANCE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">ABOUT</NavLink>
          </NavItem>
        </NavigationList>
      </Navigation>
      <Button type="button">
Book
      </Button>
    </HeaderStyled>
  );
};
