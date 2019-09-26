import styled from "styled-components";
import colors from "../style/colors";

const A2 = styled.a`
  font-size: 0.95em;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.color ? colors[props.color] : colors.dark)};
  margin: 0.1em 0 0.6em;
  font-weight: ${props => (props.strong ? 500 : 400)};
  line-height: 1.45;
`;

export default A2;
