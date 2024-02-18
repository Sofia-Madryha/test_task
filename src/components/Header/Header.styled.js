import styled from "styled-components";

export const HeaderStyled = styled.div`
  padding: 10px 0 10px 0;

  @media only screen and (min-width: 1024px) {
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  @media only screen and (min-width: 420px) {
  }

  @media only screen and (min-width: 1024px) {
    height: 60px;

    position: relative;
  }
`;
export const BurgerMenu = styled.div`
  overflow: visible;
  margin-left: auto;
  @media only screen and (min-width: 1024px) {
    display: none;
    position: relative;
  }
`;

export const BurgerButtton = styled.button`
  padding: 0;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

export const Logo = styled.div`
  height: 100%;

`;

export const LogoSvg = styled.svg`
  width: 101px;
  height: 40px;

  @media only screen and (min-width: 1024px) {
    width: 150px;
    height: 60px;
  }
`;

export const Navigation = styled.nav`
display: none;

  @media only screen and (min-width: 1024px) {
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:79px;
  }
`;
export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  font-family: "Cinzel", serif;
  font-size: 14px;
`;
export const NavItem = styled.li`
  position: relative;
`;
export const NavLink = styled.a`
  &:active,
  &:hover {
    &:after {
      visibility: visible;
    }
  }

  &:after {
    visibility: hidden;
    content: "";
    position: absolute;
    bottom: -1px;
    left: 15%;
    width: 66.6%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.black};
    transition: visibility 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Button = styled.button`
display: none;
  position: relative;
  font-size: 12px;
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.accent};
  cursor: pointer;
  font-family: "Cinzel", serif;
  padding: 10px 33px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: 1px solid ${(p) => p.theme.colors.black};
  }

  @media only screen and (min-width: 1024px) {
    display: inline-block;
  }
`;
