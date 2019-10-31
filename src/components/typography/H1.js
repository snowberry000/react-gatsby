import styled from "styled-components";
import colors from "../style/colors";

const H1 = styled.h1`
  font-size: 4.5em;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.color ? colors[props.color] : colors.white)};
  margin: 0.2em 0 0.3em;
  font-weight: 700;
  line-height: 0.9;
  text-decoration: none;
  a {
    text-decoration: none;
  }
  @media (max-width: 70px) {
    font-size: 4.6em;
  }
  @media (max-width: 600px) {
    font-size: 3.6em;
  }
`;

export default H1;
