import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import {
  usePasswordLoginMutation,
  useCurrentUserQuery,
} from "generated/graphql";
import { useAuthStore } from "components/Auth/Auth";
import { useRouter } from "next/router";
import { customMedia } from "components/styles/Global";
import { useStore } from "components/Home/HomeState";

type FormValues = {
  emailOrUsername: string;
  password: string;
};

const LoginShield: React.FC<any> = () => {
  const state = useStore();
  const Router = useRouter();
  const dispatch = useAuthStore((state) => state.dispatch);
  const [PasswordLogin, { loading, error }] = usePasswordLoginMutation({
    onCompleted: (data) => {
      // @ts-ignore
      dispatch({ type: "Login", payload: data?.PasswordLogin });
      Router.push("/chat");
    },
  });
  const {
    data,
    loading: UserLoading,
    error: UserError,
    called,
    refetch,
  } = useCurrentUserQuery();
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({
    emailOrUsername,
    password,
  }) => {
    await PasswordLogin({
      variables: {
        emailOrUsername,
        password,
      },
    }).then(() => {
      if (data && !UserLoading && !UserError && called) refetch();
    });
  };

  return (
    <LoginStyles>
      <Heading className="mt-5">Please Login Before Continuing</Heading>
      {error ? (
        <Alert
          variant="danger"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        >
          {error.message}
        </Alert>
      ) : null}
      <Form method="Post" onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: true })}
          name="emailOrUsername"
          type="text"
          placeholder="Email Or Username"
        />
        {errors.emailOrUsername && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Please Provide A Valid Email Address Or Username
          </Alert>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Please Input Valid Password
          </Alert>
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
        </ButtonGroup>

        <p className="form-footer-text">
          Don't Have An Account? {/* 
          //@ts-ignore */}
          <a
            onClick={() => {
              Router.push("/");
              // @ts-ignore
              state.setShowRegister();
            }}
          >
            Register
          </a>{" "}
        </p>
      </Form>
    </LoginStyles>
  );
};

const LoginStyles = styled.div`
  margin-top: 10rem !important;
`;

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

const Heading = styled(AccountFormMainHeading)`
  ${customMedia.lessThan("medium")`
    font-size: 2rem;
  `}
`;
const Form = styled(AccountForm)`
  .custom-btn {
    padding: 1rem 2rem 1rem 2rem;
  }
  .small-btn {
    width: 20%;
    margin-left: auto;
  }
`;

export default LoginShield;
