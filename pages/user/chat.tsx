import React from "react";
import styled from "styled-components";
import DotMenu from "components/utils/Menu";
import Chat from "components/Chat/Index";
import Layout from "../../components/Layout/Layout";
import AuthShield from "components/Auth/AuthShield";

const ChatStyles = styled.div``;

const index = () => {
  return (
    <Layout>
      <ChatStyles>
        <AuthShield>
          <DotMenu />
          <Chat />
        </AuthShield>
      </ChatStyles>
    </Layout>
  );
};

export default index;
