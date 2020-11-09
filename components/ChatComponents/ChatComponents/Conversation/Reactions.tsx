import React, { useState } from "react";
import { Button, OverlayTrigger, Popover, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { useReactionMutation } from "generated/graphql";

interface Props {
  MessageId: number | any;
}

const ReactButton: React.FC<Props> = ({ MessageId }) => {
  const [CreateReaction, { loading, error }] = useReactionMutation();
  const [show, setShow] = useState(false);
  const CONTENTS = ["❤️", "😄", "😲", "😢", "😡", "👍", "👎"];
  if (error) console.log(error.message);
  if (loading) return <Spinner animation="grow" />;

  const react = (reaction: string) => {
    CreateReaction({
      variables: {
        messageId: MessageId,
        content: reaction,
      },
    });
    setShow(false);
  };

  const popover = (
    <Popover className="rounded-pill" id="popover-basic">
      <Popover.Content
        className="d-flex align-items-center"
        style={{ height: "3rem" }}
      >
        {CONTENTS.map((reaction) => (
          <IndividualReactIcon
            onClick={() => react(reaction)}
            variant="link"
            key={reaction}
          >
            <ReactionIcons>{reaction}</ReactionIcons>
          </IndividualReactIcon>
        ))}
      </Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger
      show={show}
      onToggle={setShow}
      trigger="click"
      placement="top"
      overlay={popover}
      transition={false}
      rootClose
    >
      <ReactionStyles variant="link">
        <Icon>☻</Icon>
      </ReactionStyles>
    </OverlayTrigger>
  );
};

const ReactionStyles = styled(Button)`
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:hover {
    text-decoration: none;
  }
`;

const IndividualReactIcon = styled(ReactionStyles)`
  padding: 0 0.2rem 0 0.2rem;
`;

const Icon = styled.i`
  font-size: 3rem;
  color: #fff;
  &:hover {
    outline: none;
  }
`;
const ReactionIcons = styled(Icon)`
  font-size: 1.4rem;
  transition: all 0.2s ease-in;
  &:focus {
    outline: none;
  }
  &:hover {
    font-size: 2.3rem;
  }
`;

export default ReactButton;
