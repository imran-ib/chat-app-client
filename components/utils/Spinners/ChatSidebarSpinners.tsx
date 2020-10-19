import React from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import { customMedia } from "components/styles/Global";

const SpinnerStyles = styled(Spinner)`
  width: 5rem;
  height: 5rem;
  position: absolute;
  margin: auto;
  top: 30rem;
  left: 17rem;
  ${customMedia.lessThan("small")`
  top: 26rem;
  left: 14rem;
  
  `}
`;
const CharSpinner = styled(Spinner)`
width: 5rem;
  height: 5rem;
  position: absolute;
  margin: auto;
  top: 30rem;
  right: 60rem;
  ${customMedia.lessThan("small")`
  top: 26rem;
  right: 14rem;
  
  `}
`;


export const ChatSidebarSpinner = () => {
  return (
    <SpinnerStyles animation="border" role="Chat" size="sm" variant="primary" />
  );
};

export const ChatSpinner = () =>{
  return (
    <CharSpinner animation="border" role="Chat" size="sm" variant="primary"/>
  )
}
