import React from "react";
import styled from "styled-components";
import colors from "./style/colors";

const InputFieldWrapper = styled.input`
  border: 2px solid ${colors.accent3};
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.05em;
  width: 20em;
  max-width: 100%;
`;

const InputField = props => {
  return <InputFieldWrapper {...props} />;
};

export default InputField;
