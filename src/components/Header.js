import React from "react";
import styled from "styled-components";
import LayoutBlock from "./layout/LayoutBlock";
import LogoImg from "../images/Logo.svg";
import ButtonsRow from "./layout/ButtonsRow";
import colors from "./style/colors";

const HeaderWrapper = styled.div`
  ${LayoutBlock}
  display: flex;
  background: white;
  overflow: hidden;
  div.left {
    flex: 0 0.8 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 600px) {
      padding: 0.5em 0.5em;
      img {
        width: 10em;
      }
    }
   }
  div.right {
    flex: 0 0.5 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 600px) {
      padding: 0.5em 0.5em;     
    }
  }
`;

const Space = styled.div`
  width: 1.5em;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Logo  = styled.img`
  width: 15em;
`;

const StyledSignUpButton = styled.a`
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
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <div className="left">
        <a href="https://www.heyagenda.com/"><Logo src={LogoImg} /></a>        
      </div>
      <div className="right">
        <ButtonsRow>
          <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">Help</StyledSignUpButton>
          <Space />
          <StyledSignUpButton type="secondary" id="login-btn" href="#">Login</StyledSignUpButton>
          <StyledSignUpButton className="register-btn-header register-btn-signup" href="#">Sign Up</StyledSignUpButton>
        </ButtonsRow>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
