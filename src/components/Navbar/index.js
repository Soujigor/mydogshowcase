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
              <NavLinks
                to="sobre"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="fotos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Fotos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="depoimentos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Depoimentos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="tutores"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Tutores
              </NavLinks>
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
