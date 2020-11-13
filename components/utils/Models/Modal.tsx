import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

interface ModalProps {
  show: boolean | any;
  onHide: () => void | any;
  children: React.ReactNode;
}
// Props from useModalStore state
const ModalComponent: React.FC<ModalProps> = (props) => {
  const { show, onHide, children } = props;
  return (
    <>
      <ModalStyles size="lg" show={show} onHide={onHide}>
        {children}
      </ModalStyles>
    </>
  );
};

const ModalStyles = styled(Modal)`
  //over ride the bootstrap modal content class name for custom styling
  .modal-content {
    background: #292f3f;
    color: #c9c9c9;
  }
`;

export default ModalComponent;
