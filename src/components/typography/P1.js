import styled from "styled-components";
import colors from "../style/colors";

const P1 = styled.p`
  font-size: 1.75em;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.color ? colors[props.color] : colors.darker)};
  margin: 0.3em 0 0.8em;
  font-weight: ${props => (props.strong ? 500 : 400)};
  line-height: 1.8;
  ${props =>
    props.ellipses
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ``}
  @media (max-width: 640px) {
    font-size: 1.3em;
  }
  ${props =>
    props.serif &&
    `
    font-family: Lora, "Palatino Linotype", "Book Antiqua", Palatino, Georgia,
      serif;
    color: ${colors.ultra_dark};
    margin: 0.3em 0 0.8em;
    font-weight: 400;
    line-height: 1.8;
    font-size: 1.2em;
  `}

  ${props => props.strong && `font-weight: 700`}
`;

export default P1;
