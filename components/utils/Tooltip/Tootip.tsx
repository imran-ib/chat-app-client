import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  position: string;
  content: string;
}

const TooltipComponent: React.FC<Props> = (props) => {
  const { content, position } = props;
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      <ToolTipText>{content}</ToolTipText>
    </Tooltip>
  );

  return (
    //   @ts-ignore
    <OverlayTrigger placement={position} overlay={renderTooltip}>
      {/* 
        //@ts-ignore */}
      {props.children}
    </OverlayTrigger>
  );
};

const ToolTipText = styled.div`
  font-size: 1.2rem;
`;

export default TooltipComponent;
