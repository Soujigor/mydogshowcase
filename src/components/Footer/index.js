import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">Blabla1</FooterLink>
              <FooterLink to="/signIn">Blabla2</FooterLink>
              <FooterLink to="/signIn">Blabla3</FooterLink>
              <FooterLink to="/signIn">Blabla4</FooterLink>
              <FooterLink to="/signIn">Blabla5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">Blabla1</FooterLink>
              <FooterLink to="/signIn">Blabla2</FooterLink>
              <FooterLink to="/signIn">Blabla3</FooterLink>
              <FooterLink to="/signIn">Blabla4</FooterLink>
              <FooterLink to="/signIn">Blabla5</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">Blabla1</FooterLink>
              <FooterLink to="/signIn">Blabla2</FooterLink>
              <FooterLink to="/signIn">Blabla3</FooterLink>
              <FooterLink to="/signIn">Blabla4</FooterLink>
              <FooterLink to="/signIn">Blabla5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">Blabla1</FooterLink>
              <FooterLink to="/signIn">Blabla2</FooterLink>
              <FooterLink to="/signIn">Blabla3</FooterLink>
              <FooterLink to="/signIn">Blabla4</FooterLink>
              <FooterLink to="/signIn">Blabla5</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
