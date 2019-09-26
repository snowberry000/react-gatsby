import styled from "styled-components";
import colors from "../style/colors";

const H3 = styled.h3`
  font-size: 1.7em;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.color ? colors[props.color] : colors.darker)};
  margin: 0.1em 0 1.3em;
  font-weight: 600;
  line-height: 1.55;
  @media (max-width: 640px) {
    font-size: 1.6em;
  }
`;

export default H3;
