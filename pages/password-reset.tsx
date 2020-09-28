import Layout from "components/Layout/Layout";
import React from "react";
import {
  AccountFormMainHeading,
  AccountForm,
} from "components/styles/SharedStyles";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { customMedia } from "components/styles/Global";

const PasswordResetPage = () => {
  return (
    <Layout>
      <Container>
        <Styles>
          <Heading>Reset Your Password Password</Heading>
          <Form method="Post">
            <input name="Password" type="password" placeholder="Password" />
            <input
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
            />
            <button className="custom-btn btn small-btn  ">Submit</button>
            <Text>OR Request One Time Password</Text>
            <input name="Email" type="email" placeholder="Email" />
            <button className="custom-btn small-btn btn float-right ">
              Submit
            </button>
          </Form>
        </Styles>
      </Container>
    </Layout>
  );
};

const Styles = styled.div`
  margin-top: 10rem;
`;
const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 1rem;

  ${customMedia.lessThan("medium")`    
  font-size: 2rem;

    `}
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
