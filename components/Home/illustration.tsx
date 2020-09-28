import { customMedia } from "components/styles/Global";
import React from "react";
import styled from "styled-components";

const Styles = styled.div``;

const Illustration = () => {
  return (
    <Styles>
      <Image src="images/illustration.png" alt="" />
    </Styles>
  );
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 4rem 4rem 4rem;
  ${customMedia.lessThan("large")`    
  margin: 0;
  margin-top: 4rem;

  
    `}
`;

export default Illustration;
