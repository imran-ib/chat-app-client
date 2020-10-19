import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Illustration from "./illustration";
import { useStore } from "./HomeState";
import Register from "./AccountForms/Register";
import Login from "./AccountForms/Login";
import ForgetPassword from "./AccountForms/ForgotPassword";
import styled from "styled-components";
import { customMedia } from "components/styles/Global";
import OneTimePassword from "./AccountForms/InputOneTimePassword";
import { useUser } from "components/Auth/Auth";
import { useRouter } from "next/router";

const AccountCard = styled.div`
  margin-right: 2.5rem;
  margin-top: 9rem;
  background: rgba(196, 196, 196, 0.06);
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  ${customMedia.lessThan("small")`    
  margin-right:0;
    `}

  ${customMedia.lessThan("medium")`    
  margin-right:0;
  margin-left:0;
    `}
`;

const Logo = styled.img`
  width: 15rem;
  display: flex;
  margin: auto;
`;

const Home = () => {
  const state = useStore();
  const user = useUser();
  const Router = useRouter();
  if (user) Router.push("/user/profile");
  return (
    <Container>
      <Row>
        <Col lg={{ order: "last" }} sm={12}>
          <Illustration />
        </Col>
        <Col lg={6} sm={12}>
          <AccountCard>
            <Logo src="images/logo.png" alt="Site logo" />
            {state.Register && <Register />}
            {state.Login && <Login />}
            {state.ForgotPassword && <ForgetPassword />}
            {state.OTPInput && <OneTimePassword />}
          </AccountCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
