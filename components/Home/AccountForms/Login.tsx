import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";

const Login = () => {
  const state = useStore();
  return (
    <LoginStyles>
      <Heading>Login</Heading>
      <Form method="Post">
        <input name="Email" type="email" placeholder="Email" />

        <input name="Password" type="password" placeholder="Password" />
        <ButtonGroup>
          <button className="custom-btn btn">Login</button>
          {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowForgetPassword()}>Forgot Password.?</a>
        </ButtonGroup>

        <Text>OR Request One Time Password</Text>
        <input name="Email" type="email" placeholder="Email" />
        <button className="custom-btn small-btn btn float-right ">
          Submit
        </button>

        <p className="form-footer-text">
          Don't Have An Account? {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowRegister()}>Register</a>{" "}
        </p>
      </Form>
    </LoginStyles>
  );
};

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const LoginStyles = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #ff1d6e !important;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

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

export default Login;
