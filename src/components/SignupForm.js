import React from "react";
import styled from "styled-components";
import colors from "./style/colors";
import Button from "./Button";
import InputField from "./InputField";

const FormWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
    button {
      margin-top: 1em;
    }
    input {
      margin: 0 !important;
    }
  }
`;

const SignupForm = props => {
  return (
    <FormWrapper>
      <InputField placeholder="Your work email" style={{ marginRight: "1em" }} />
      <Button>Sign up</Button>
    </FormWrapper>
  );
};

export default SignupForm;
