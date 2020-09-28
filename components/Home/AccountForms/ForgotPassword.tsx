import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";

const ForgetPassword = () => {
  const state = useStore();
  return (
    <ForgetPasswordStyles>
      <Heading>Forgot Your Password.?</Heading>
      <Form method="Post">
        <input name="Email" type="email" placeholder="Email" />
        <Text>We Will Send You An Email With A Password Reset Link.</Text>
        <p className="form-footer-text">
          Go Back to {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowLogin()}>Login</a>{" "}
        </p>
      </Form>
    </ForgetPasswordStyles>
  );
};

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ForgetPasswordStyles = styled.div``;
const Heading = styled(AccountFormMainHeading)``;
const Form = styled(AccountForm)`
  .custom-btn {
    padding: 1rem 2rem 1rem 2rem;
  }
  .small-btn {
    width: 20%;
    margin-left: auto;
  }
`;

export default ForgetPassword;
