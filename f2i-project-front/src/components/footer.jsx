import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.png'; // Remplacez par le chemin de votre icône
import instagramIcon from '../assets/instagram.png'; // Remplacez par le chemin de votre icône
import linkedInIcon from '../assets/linkedin.png'; // Remplacez par le chemin de votre icône
import twitterIcon from '../assets/twitter.png'; // Remplacez par le chemin de votre icône
import logo from '../assets/logo.png'


const FooterContainer = styled.footer`
  background-color: #2A5738;
  color: white;
  padding: 10px 0;
`;

const FooterTop = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start; // Changez ici pour aligner les éléments en haut
width: 100%;
padding: 0 20px; 
`;

const BrandName = styled.h2`
  margin: 0;
  font-size: 18px; // Ajustez selon les besoins
`;

const Logo = styled.img`
  height: 40px; // Ajustez selon les besoins
  margin-top: 4px; // Ajoutez un espace entre le titre et le logo
`;

const Nav = styled.nav`
  display: flex;
  margin-right: 20px; 
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px; // Adjust as needed
  font-size: 14px;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-right: 50px;
`;

const SocialIcon = styled.img`
  height: 20px; // Adjust as needed
  width: 20px; // Adjust as needed
  margin-left: 15px; // Adjust as needed
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin-left: 30%;
`;

const FooterComponent = () => (
  <FooterContainer>
    <FooterTop>
    <div>
        <BrandName>THÉ TIP TOP</BrandName>
        <Logo src={logo} alt="Logo" />
      </div>
      <Nav>
        <NavItem to="/opportunites">Opportunités Professionnelles</NavItem>
        <NavItem to="/mentions">Mentions légales</NavItem>
        <NavItem to="/conditions">Conditions générales (CGVU)</NavItem>
        <NavItem to="/politique">Politique de confidentialité</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Nav>
    </FooterTop>
    <FooterBottom>
      <CopyrightText>© 2023 Thé Tip Top. Propulsé par Thé Tip Top</CopyrightText>
      <SocialMediaIcons>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={linkedInIcon} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={twitterIcon} alt="Twitter" />
        </a>
      </SocialMediaIcons>
    </FooterBottom>
  </FooterContainer>
);

export default FooterComponent;
