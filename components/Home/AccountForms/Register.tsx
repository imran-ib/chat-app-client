import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateUserMutation } from "generated/graphql";
import Alert from "react-bootstrap/Alert";
import { useAuthStore } from "components/Auth/Auth";
import { useRouter } from "next/router";

type FormValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const state = useStore();
  const Router = useRouter();
  const dispatch = useAuthStore((state) => state.dispatch);
  const [CreateUser, { loading, error }] = useCreateUserMutation({
    onCompleted: (data) => {
      // @ts-ignore
      dispatch({ type: "Login", payload: data?.CreateUser });
      Router.push("/user/chat");
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async ({
    email,
    username,
    password,
    confirmPassword,
  }) => {
    if (password.trim() !== confirmPassword.trim()) {
      alert(`Password Do Not Match`);
      return;
    }
    await CreateUser({
      variables: {
        email,
        username,
        password,
      },
    });
  };

  return (
    <RegisterStyles>
      <Heading>Register</Heading>
      {error && (
        <Alert
          variant="danger"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        >
          {error.message}
        </Alert>
      )}
      <Form method="Post" onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: true })}
          name="email"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Please Provide A Valid Email Address
          </Alert>
        )}
        <input
          ref={register({ required: true })}
          name="username"
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Username is required
          </Alert>
        )}
        <input
          ref={register({ required: true, minLength: 4 })}
          name="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Password Minimum Length is 4 characters
          </Alert>
        )}
        <input
          ref={register({ required: true })}
          name="confirmPassword"
          type="password"
          placeholder="confirmPassword"
        />
        {errors.confirmPassword && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Please Confirm Your Password
          </Alert>
        )}
        {loading ? (
          <button className="custom-btn btn" type="button" disabled>
            Please Wait...{" "}
            <span
              className="spinner-border spinner-border-lg"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        ) : (
          <button className="custom-btn btn">Submit</button>
        )}
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
