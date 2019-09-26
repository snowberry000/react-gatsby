import React from "react";
import styled from "styled-components";
import LayoutBlock from "./layout/LayoutBlock";
import LogoImg from "../images/Logo.png";
import Button from "./Button";
import ButtonsRow from "./layout/ButtonsRow";
import P1 from "./typography/P1";

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

const Header = props => {
  return (
    <HeaderWrapper>
      <div className="left">
        <Logo src={LogoImg} />
      </div>
      <div className="right">
        <ButtonsRow>
          <Button type="tertiary">Help</Button>
          <Space />
          <Button type="secondary">Login</Button>
          <Button>Sign Up</Button>
        </ButtonsRow>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
