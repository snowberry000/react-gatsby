import React from "react";
import styled from "styled-components";
import colors from "./style/colors";

const ButtonWrapper = styled.button`
  background: ${props => colors[props.color] || colors.accent1};
  border: 2px solid ${props => colors[props.color] || colors.accent1};
  color: white;
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.05em;
  outline: none;
  cursor: pointer;
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

const Button = props => {
  const { color, type } = props;

  return (
    <ButtonWrapper color={color} type={type}>
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
