import styled from "styled-components";
import colors from "../style/colors";

const H4 = styled.h4`
  font-size: 1.25em;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.color ? colors[props.color] : colors.darker)};
  margin: 0.3em 0 0.8em;
  font-weight: 500;
  line-height: 1.55;
`;

export default H4;
