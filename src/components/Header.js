import React from "react";
import styled from "styled-components";
import LogoImg from "../images/Logo.svg";
import ButtonsRow from "./layout/ButtonsRow";
import colors from "./style/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.div`
  display: flex;
  background: white;  
  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em 2em;
  @media (max-width: 1199px) {
    justify-content: center;
    padding-bottom: 0;
  }
`;

const Logo  = styled.img`
  width: 15em;
`;

const StyledSignUpButton = styled.a`
  position: relative;
  background: ${props => colors[props.color] || colors.accent1};
  border: 2px solid ${props => colors[props.color] || colors.accent1};
  color: white;
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.05em;
  outline: none;
  cursor: pointer;
  text-decoration: none;  
  :active {
    filter: brightness(0.8);
  }
  ${props =>
    props.type === "secondary" &&
    `
    background: none;
    color: ${colors.accent1};
  `}
  ${props =>
    props.type === "tertiary" &&
    `
    background: none;
    border: none;
    color: ${colors.grey};
  `}

  &.has-sub-menu {
    height: 100%;
    display: flex;
    align-items: center;

    .fa-angle-down {
      margin-left: 5px;    
      transform: translateY(2px);
    }
  
    .dropdown {
      position: absolute;
      display: none;
      top: 100%;
      left: 0;
      padding: 0 1em;
      background-color: white;
      margin-top: 2px;
      li {
        padding: 1em 0;
        text-decoration: none;
        white-space: nowrap;
        &:hover {
          color: #6B50C8;
        }
      }
    }
  
    &:hover {
      .dropdown {
        display: block;
      }
    }
  } 
  
  @media (max-width: 1280px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  @media (max-width: 1199px) {

  }
`;

const NavBar = styled(ButtonsRow)`
  margin-left: auto;
  padding: 0 2em;
  z-index: 1;
  align-items: center;
  @media (max-width: 1199px) {
    justify-content: center;
    margin: 0 auto;
  }

  .register-btn-signup {
    margin: 1em;
  }
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <a href="https://www.heyagenda.com/"><Logo src={LogoImg} /></a>        
      </LogoContainer>
      <NavBar>
        <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">Home</StyledSignUpButton>
        <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">Features</StyledSignUpButton>
        <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">Integrations</StyledSignUpButton>
        <StyledSignUpButton className="has-sub-menu" type="tertiary">
          Examples <FontAwesomeIcon icon={faAngleDown} />
          <ul className="dropdown">
            <li>Meeting Rooms</li>
            <li>Sports Venue</li>
            <li>Professional Studios</li>
            <li>Coworking Spaces</li>
            <li>Classrooms and Labs</li>
            <li>Consulting Rooms</li>
          </ul>
        </StyledSignUpButton>
        <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">Pricing</StyledSignUpButton>
        <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">More</StyledSignUpButton>
        <StyledSignUpButton type="tertiary" id="login-btn" href="#">Login</StyledSignUpButton>
        <StyledSignUpButton className="register-btn-header register-btn-signup" href="#">Sign Up</StyledSignUpButton>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
