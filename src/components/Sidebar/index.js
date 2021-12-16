import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="sobre" onClick={toggle}>
            Sobre
          </SidebarLink>
          <SidebarLink to="fotos" onClick={toggle}>
            Fotos
          </SidebarLink>
          <SidebarLink to="depoimentos" onClick={toggle}>
            Depoimentos
          </SidebarLink>
          <SidebarLink to="tutores" onClick={toggle}>
            Tutores
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signIn">Cadastre-se</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
