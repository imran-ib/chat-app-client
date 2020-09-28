import Layout from "../components/Layout/Layout";
import React from "react";
import Home from "../components/Home";
import styled from "styled-components";

const HomeStyles = styled.div`
  margin-top: 5rem;
`;

const index = () => {
  return (
    <Layout>
      <HomeStyles>
        <Home />
      </HomeStyles>
    </Layout>
  );
};

export default index;
