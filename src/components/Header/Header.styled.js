import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;
export const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1024px){
    overflow: hidden;
  }
`;
export const BurgerMenu = styled.div`
  margin-left: auto;
  // overflow: hidden;
`;

export const BurgerButtton = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

export const Logo = styled.div`
  width: 100%;
`;

export const Navigation = styled.nav`
  overflow: hidden;

  @media only screen and (min-width: 1024px){
    overflow: visible;
    margin-right: 251px;
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
position: relative;
  overflow: hidden;
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
`;
