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
          <SidebarLink to="projetos" onClick={toggle}>
            Projetos
          </SidebarLink>
          <SidebarLink to="equipe" onClick={toggle}>
            Equipe
          </SidebarLink>
          <SidebarLink to="contato" onClick={toggle}>
            Contato
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/budget">Orçamento</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
