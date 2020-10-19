import React from "react";
import styled from "styled-components";
import Chat from "components/ChatComponents/Chat/Index";
import Layout from "../components/Layout/Layout";
import AuthShield from "components/Auth/AuthShield";

const ChatStyles = styled.div``;

const index = () => {
  return (
    <Layout>
      <ChatStyles>
        <AuthShield>
          <Chat />
        </AuthShield>
      </ChatStyles>
    </Layout>
  );
};

export default index;
