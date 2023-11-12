import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem, InputBase, Paper, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import { accountService } from '../services/account.service';
import { useAuth  } from '../services/authContex';
import logo from '../assets/logo.png';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #2A5738;
  }
`;

const LogoAndTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  height: 40px; // Hauteur du logo, à ajuster selon vos besoins
  width: 50px; // Largeur automatique pour maintenir le ratio de l'image
  margin-top: 2px; // Espace au-dessus du logo
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const StyledButton = styled(Button)`
  color: white;
  &:hover {
    color: #CCC13A;
  }
  @media (max-width: 768px) {
    display: none;
  }
  .nav-link {
    text-decoration: none;
    color: inherit;
    &.active {
      font-weight: bold;
      border-bottom: 2px solid #CCC13A;
    }
  }
`;

const MenuButton = styled(IconButton)`
  color: white;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: white;
  border-radius: 25px;
  margin-right: 10px;
`;

const SearchInput = styled(InputBase)`
  flex: 1;
  margin-left: 5px;
`;

function Navbar() {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Remplacez ceci par la logique d'authentification réelle
  const { isAuthenticated, handleAuthChange } = useAuth();
  console.log(isAuthenticated);
  useEffect(() => {
    const handleResize = () => {
      const zoomLevel = window.innerWidth / window.outerWidth;
      const newIsMobile = zoomLevel < 0.7 || window.innerWidth <= 768;
      setIsMobile(newIsMobile);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isAuthenticated]);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleLogout = () => {
    accountService.logout();
    handleAuthChange(false);
    handleProfileMenuClose();
    history.push('/home');
  };


  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoAndTitleContainer>
          <Typography variant="h6">THE TIP TOP</Typography>
          <Logo src={logo} alt="Logo" /> {/* Assurez-vous que vous avez importé votre logo */}
        </LogoAndTitleContainer>
        <NavContainer>
          <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder="Rechercher" />
          </SearchContainer>
          {isMobile ? (
            <MenuButton edge="end" aria-label="menu" aria-haspopup="true" onClick={handleMobileMenuOpen}>
              <MenuIcon style={{ color: 'white' }} />
            </MenuButton>
          ) : (
            <div className="nav-container">
              <StyledButton color="inherit"><NavLink to="/home" className="nav-link" activeClassName="active">Accueil</NavLink></StyledButton>
              <StyledButton color="inherit">L'entreprise</StyledButton>
              <StyledButton color="inherit"><NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink></StyledButton>
              <StyledButton color="inherit"><NavLink to="/participer" className="nav-link" activeClassName="active">Participer</NavLink></StyledButton>
              <StyledButton color="inherit"><NavLink to="/contact" className="nav-link" activeClassName="active"> Contact </NavLink></StyledButton>
              {isAuthenticated ? (
                <>
                <StyledButton color="inherit">
                  <Avatar onClick={handleProfileMenuOpen} style={{ cursor: 'pointer' }} />
                  <Menu anchorEl={profileMenuAnchorEl} open={Boolean(profileMenuAnchorEl)} onClose={handleProfileMenuClose}>
                    <MenuItem onClick={handleProfileMenuClose}>Mon profil</MenuItem>
                    <MenuItem onClick={handleProfileMenuClose}>Mon compte</MenuItem>
                    <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
                  </Menu>
                  </StyledButton>
                </>
              ) : (
                <StyledButton color="inherit"><NavLink to="/signup" className="nav-link" activeClassName="active"> Connexion </NavLink></StyledButton>
              )}
            </div>
          )}
          <Menu anchorEl={mobileMenuAnchorEl} open={Boolean(mobileMenuAnchorEl)} onClose={handleMobileMenuClose}>
            <MenuItem component={NavLink} to="/home" onClick={handleMobileMenuClose}>Accueil</MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>L'entreprise</MenuItem>
            <MenuItem component={NavLink} to="/blog" onClick={handleMobileMenuClose}>Blog</MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>Participer</MenuItem>
            <MenuItem component={NavLink} to="/contact" onClick={handleMobileMenuClose}>Contact</MenuItem>
          </Menu>
        </NavContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;