import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import {
  usePasswordLoginMutation,
  useCurrentUserQuery,
} from "generated/graphql";
import OPTFormComponent from "./OTPForm";
import { useAuthStore } from "components/Auth/Auth";
import GoogleAuth from "./GoogleAuth";

type FormValues = {
  emailOrUsername: string;
  password: string;
};

const Login: React.FC<any> = () => {
  const dispatch = useAuthStore((state) => state.dispatch);
  const {
    loading: UserLoading,
    error: userError,
    called,
    refetch,
  } = useCurrentUserQuery();
  const [PasswordLogin, { loading, error }] = usePasswordLoginMutation({
    onCompleted: (data) => {
      // @ts-ignore
      dispatch({ type: "Login", payload: data?.PasswordLogin });
      if (data && !UserLoading && !userError && called) refetch();
    },
  });
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const state = useStore();
  const onSubmit: SubmitHandler<FormValues> = async ({
    emailOrUsername,
    password,
  }) => {
    await PasswordLogin({
      variables: {
        emailOrUsername,
        password,
      },
    });
  };

  return (
    <LoginStyles>
      <Heading>Login</Heading>
      {error ? (
        <Alert
          variant="danger"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        >
          {error.message}
        </Alert>
      ) : (
        ""
      )}
      <Form method="Post" onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: true })}
          name="emailOrUsername"
          type="text"
          placeholder="Email Or Username"
        />
        {errors.emailOrUsername ? (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Please Provide A Valid Email Address Or Username
          </Alert>
        ) : (
          ""
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        {errors.password ? (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Please Input Valid Password
          </Alert>
        ) : (
          ""
        )}
        <ButtonGroup>
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
            <button className="custom-btn btn">Login</button>
          )}
          {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowForgetPassword()}>Forgot Password.?</a>
        </ButtonGroup>

        <p className="form-footer-text">
          Don't Have An Account? {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowRegister()}>Register</a>{" "}
        </p>
      </Form>
      {/* OPT Form */}
      <OPTFormComponent />
      {/* Google Auth */}
      <GoogleAuth />
    </LoginStyles>
  );
};

// const Text = styled.p`
//   font-size: 2rem;
//   text-align: center;
//   margin-top: 1rem;
//   margin-bottom: 1rem;
// `;
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
