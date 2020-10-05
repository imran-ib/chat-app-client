import Layout from "../../components/Layout/Layout";
import React from "react";
import Profile from "../../components/Profile";
import styled from "styled-components";
import DotMenu from "components/utils/Menu";
import AuthShield from "components/Auth/AuthShield";

const ProfileStyles = styled.div``;

const index = () => {
  return (
    <Layout>
      <ProfileStyles>
        <AuthShield>
          <DotMenu />
          <Profile />
        </AuthShield>
      </ProfileStyles>
    </Layout>
  );
};

export default index;
