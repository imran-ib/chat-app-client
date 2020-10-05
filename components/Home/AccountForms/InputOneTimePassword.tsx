import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";
import { useForm, SubmitHandler } from "react-hook-form";
import { useVerifyOptMutation } from "generated/graphql";
import Alert from "react-bootstrap/Alert";
import { useAuthStore } from "components/Auth/Auth";
import { useRouter } from "next/router";

type FormValues = {
  OTP: number;
  username: string;
};

const OneTimePassword: React.FC<any> = () => {
  const Router = useRouter();
  const dispatch = useAuthStore((state) => state.dispatch);
  const state = useStore();
  const [ValidateOTP, { loading, error }] = useVerifyOptMutation({
    onCompleted: (data) => {
      // @ts-ignore
      dispatch({ type: "Login", payload: data?.ValidateOTP });
      Router.push("/user/chat");
    },
  });
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async ({ OTP, username }) => {
    //@ts-ignore
    const OTPInt = parseInt(OTP);
    await ValidateOTP({
      variables: {
        username,
        OTP: OTPInt,
      },
    });
  };

  return (
    <OneTimePasswordStyles>
      <Heading>
        One Time Password Has been Generated and sent to your registered Email
        Address.
      </Heading>
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
          ref={register()}
          name="username"
          type="text"
          placeholder="Email Or Username"
          // @ts-ignore
          defaultValue={state.username}
        />
        {errors.username && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Invalid Input
          </Alert>
        )}
        <input
          name="OTP"
          type="number"
          placeholder="Enter OTP"
          ref={register({ required: true })}
        />
        {errors.OTP && (
          <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
            Invalid Input
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
          <button className="custom-btn btn">Login</button>
        )}
        <p className="form-footer-text">
          Go Back to {/* 
            //@ts-ignore */}
          <a onClick={() => state.setShowLogin()}>Login</a>{" "}
        </p>
      </Form>
    </OneTimePasswordStyles>
  );
};

const OneTimePasswordStyles = styled.div``;
const Heading = styled(AccountFormMainHeading)`
  font-size: 2rem;
  padding: 1rem;
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

export default OneTimePassword;
