import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImg from "../images/Logo.svg";
import HamburgerMenuItem from './HamburgerMenuItem';
import NavMenu from './NavMenu/NavMenu';

const HeaderWrapper = styled.div`
  display: flex;
  background: white;  
  position: relative;
  @media (max-width: 799px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em 2em;

  @media (max-width: 799px) {
    justify-content: flex-start;
    padding: 1em 2em;
  }
`;

const Logo  = styled.img`
  width: 15em;
`;

const Header = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <HeaderWrapper>
      <LogoContainer>
        <a href="https://www.heyagenda.com/"><Logo src={LogoImg} /></a>        
      </LogoContainer>

      <HamburgerMenuItem open={menuOpen} onClick={()=>handleMenuClick()} color='#6B50C8'/>
      <NavMenu open={menuOpen} />
    </HeaderWrapper>
  );
};

export default Header;
