import Layout from "components/Layout/Layout";
import React from "react";
import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { customMedia } from "components/styles/Global";
import { useRouter } from "next/dist/client/router";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import { useResetPasswordMutation } from "generated/graphql";
import { useAuthStore } from "components/Auth/Auth";

type OTPFormValues = {
  token: string;
  password: string;
  ConfirmPassword: string;
};

const PasswordResetPage = () => {
  const Router = useRouter();

  const dispatch = useAuthStore((state) => state.dispatch);

  const [ResetPassword, { loading, error }] = useResetPasswordMutation();
  const { register, handleSubmit, errors } = useForm<OTPFormValues>();
  const { token }: any = Router.query;

  const onSubmit: SubmitHandler<OTPFormValues> = async ({
    password,
    ConfirmPassword,
  }) => {
    await ResetPassword({
      variables: {
        token,
        password,
        ConfirmPassword,
      },
    }).then((res) => {
      //@ts-ignore
      dispatch({ type: "Login", payload: res.data?.ResetPassword });
      Router.push("/user/chat");
    });
  };

  return (
    <Layout>
      <Container>
        <Styles>
          <Heading>Reset Your Password Password</Heading>
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
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
                Please Input Your New Password
              </Alert>
            )}
            <input
              ref={register({ required: true })}
              name="ConfirmPassword"
              type="password"
              placeholder="ConfirmPassword"
            />
            {errors.ConfirmPassword && (
              <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
                Password Do Not Match
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
              <button className="custom-btn small-btn btn float-right">
                Submit
              </button>
            )}
          </Form>
        </Styles>
      </Container>
    </Layout>
  );
};

const Styles = styled.div`
  margin-top: 10rem;
`;

const Heading = styled(AccountFormMainHeading)`
  ${customMedia.lessThan("medium")`    
  font-size: 3rem;

    `}
`;
const Form = styled(AccountForm)`
  ${customMedia.lessThan("medium")`    
    margin-right: 0;
    margin-left: 0;
    `}
  .custom-btn {
    padding: 1rem 2rem 1rem 2rem;
  }
  .small-btn {
    width: 20%;
    margin-left: auto;

    ${customMedia.lessThan("medium")`    
    width: 40%;
    `}
  }
`;

export default PasswordResetPage;
