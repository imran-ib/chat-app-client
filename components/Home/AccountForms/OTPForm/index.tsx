import React from "react";
import { AccountForm } from "components/styles/SharedStyles";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import { useOtpLoginMutation } from "generated/graphql";
import { useStore } from "components/Home/HomeState";

type OTPFormValues = {
  emailOrUsername: string;
};

const OPTFormComponent: React.FC<any> = () => {
  const state = useStore();

  const [OTPLogin, { loading, error }] = useOtpLoginMutation();
  const { register, handleSubmit, errors } = useForm<OTPFormValues>();

  const onSubmit: SubmitHandler<OTPFormValues> = async ({
    emailOrUsername,
  }) => {
    state.username = emailOrUsername;

    await OTPLogin({
      variables: {
        emailOrUsername,
      },
    }).then((res) => {
      //@ts-ignore
      state.setOPTInput();
    });
  };

  return (
    <Form method="Post" onSubmit={handleSubmit(onSubmit)}>
      <Text>OR Request One Time Password</Text>
      {error && (
        <Alert
          variant="danger"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        >
          {error.message}
        </Alert>
      )}

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
      {loading ? (
        <button
          className="custom-btn small-btn btn float-right"
          type="button"
          disabled
        >
          Please Wait...{" "}
          <span
            className="spinner-border spinner-border-lg"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
      ) : (
        <button className="custom-btn small-btn btn float-right">Submit</button>
      )}
    </Form>
  );
};

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
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

export default OPTFormComponent;
