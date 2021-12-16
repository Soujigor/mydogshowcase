import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to="/">Quem Somos</FooterLink>
              <FooterLink to="/">Onde Estamos</FooterLink>
              <FooterLink to="/">Para onde vamos</FooterLink>
              <FooterLink to="/">Quando vamos</FooterLink>
              <FooterLink to="/">Por que vamos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Cinco Patinhos</FooterLinkTitle>
              <FooterLink to="/">Foram Passear</FooterLink>
              <FooterLink to="/">A mamãe chamou</FooterLink>
              <FooterLink to="/">Quack Quack Quack</FooterLink>
              <FooterLink to="/">Mas nenhum patinho</FooterLink>
              <FooterLink to="/">Voltou de lá</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Do it To it</FooterLinkTitle>
              <FooterLink to="/">Bounce wit' it</FooterLink>
              <FooterLink to="/">Drop wit' it</FooterLink>
              <FooterLink to="/">Lean wit'it</FooterLink>
              <FooterLink to="/">Rock wit' it</FooterLink>
              <FooterLink to="/">Snap wit' it</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Power Rangers</FooterLinkTitle>
              <FooterLink to="/">Mastodonte</FooterLink>
              <FooterLink to="/">Pterodáctilo</FooterLink>
              <FooterLink to="/">Triceratops</FooterLink>
              <FooterLink to="/">Tigre Dente de Sabre</FooterLink>
              <FooterLink to="/">Tiranossauro</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Manu
            </SocialLogo>
            <WebsiteRights>
              Manu © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.tiktok.com"
                target="_blank"
                arial-label="TikTok"
              >
                <FaTiktok />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
