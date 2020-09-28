import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";

const Register = () => {
  const state = useStore();
  return (
    <RegisterStyles>
      <Heading>Register</Heading>
      <Form method="Post">
        <input name="Email" type="email" placeholder="Email" />
        <input name="Username" type="text" placeholder="Username" />
        <input name="Password" type="password" placeholder="Password" />
        <input
          name="confirmPassword"
          type="password"
          placeholder="confirmPassword"
        />
        <button className="custom-btn btn  ">Submit</button>
        <p className="form-footer-text">
          Already Have An Account? {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowLogin()}>Login</a>{" "}
        </p>
      </Form>
    </RegisterStyles>
  );
};
const RegisterStyles = styled.div``;
const Heading = styled(AccountFormMainHeading)``;
const Form = styled(AccountForm)``;

export default Register;
