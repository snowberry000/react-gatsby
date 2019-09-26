import React from "react";
import styled from "styled-components";
import BuildingsImg from "../images/Buildings.png";
import colors from "./style/colors";

const height = 5;

const StripWrapper = styled.div`
  height: ${height}em;
  width: 100%;
  background: url(${BuildingsImg});
  background-size: auto 100%;
  background-color: ${props => colors[props.bgColor] || colors.accent1};
  margin-top: -${height - 3}em;
  background-position: center center;
`;

const BuildingsStrip = props => {
  return <StripWrapper {...props}></StripWrapper>;
};

export default BuildingsStrip;
