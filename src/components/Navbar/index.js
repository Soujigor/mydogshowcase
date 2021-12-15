import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Manu</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="sobre">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="fotos">Fotos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="depoimentos">Depoimentos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tutores">Tutores</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signIn">Cadastre-se</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
