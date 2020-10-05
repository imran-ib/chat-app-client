import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "../HomeState";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRequestResetPasswordMutation } from "generated/graphql";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

type FormValues = {
  emailOrUsername: string;
};

const ForgetPassword = () => {
  const state = useStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [
    RequestResetPassword,
    { loading, error },
  ] = useRequestResetPasswordMutation({});
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async ({ emailOrUsername }) => {
    RequestResetPassword({
      variables: {
        emailOrUsername,
      },
    })
      .then((res: any) => {
        handleShow();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <ForgetPasswordStyles>
      <Heading>Forgot Your Password.?</Heading>
      <Model show={show} handleClose={handleClose} />
      {error && (
        <Alert
          variant="danger"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        >
          {error.message}
        </Alert>
      )}
      <Form method="Post" onSubmit={handleSubmit(onSubmit)}>
        <Text>We Will Send You An Email With A Password Reset Link.</Text>
        <input
          ref={register({ required: true })}
          name="emailOrUsername"
          type="text"
          placeholder="Email Or username"
        />
        {errors.emailOrUsername && (
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
          <button className="custom-btn btn">Submit</button>
        )}
        <p className="form-footer-text">
          Go Back to {/* 
          //@ts-ignore */}
          <a onClick={() => state.setShowLogin()}>Login</a>{" "}
        </p>
      </Form>
    </ForgetPasswordStyles>
  );
};

const ModalStyles = styled(Modal)`
  & * {
    font-size: 2rem;
  }
  .wrapper {
    color: #828282;
    background-color: #292f3f;
  }
  .title {
    font-size: 3rem;
    text-align: center;
  }
`;

const Model = ({ show, handleClose }: any) => {
  return (
    <ModalStyles
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <div className="wrapper">
        <Modal.Header closeButton>
          <Modal.Title className="title">Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A Reset Token is Generated and sent to your registered Email Address.
        </Modal.Body>
      </div>
    </ModalStyles>
  );
};

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
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
