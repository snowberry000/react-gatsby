import React from "react";
import styled from "styled-components";
import LayoutBlock from "./layout/LayoutBlock";
import LogoImg from "../images/Logo.png";
import ButtonsRow from "./layout/ButtonsRow";
import colors from "./style/colors";

const HeaderWrapper = styled.div`
  ${LayoutBlock}
  display: flex;
  background: white;
  div.left {
    flex: 0 0.8 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  div.right {
    flex: 0 0.5 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const Space = styled.div`
  width: 1.5em;
`;

const Logo = styled.img`
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
        <Logo src={LogoImg} />
      </div>
      <div className="right">
        <ButtonsRow>
          <StyledSignUpButton type="tertiary" href="http://help.heyagenda.com/support/kb#/categories">Help</StyledSignUpButton>
          <Space />
          <StyledSignUpButton type="secondary" id="login-btn" href="#">Login</StyledSignUpButton>
          <StyledSignUpButton className="register-btn-header" href="#">Sign Up</StyledSignUpButton>          
        </ButtonsRow>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
