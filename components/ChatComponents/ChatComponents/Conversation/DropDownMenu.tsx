import React, { useState } from "react";
import styled from "styled-components";
import ReactButton from "./Reactions";
import CopyToClipboard from "react-copy-to-clipboard";
import { DropMenuStyles } from "components/styles/SharedStyles";
import { toast } from "react-toastify";
import { useModalStore } from "components/ChatComponents/ChatState/ModalState";
import { useDeleteMessageMutation, GetChatsDocument } from "generated/graphql";
import { Alert } from "react-bootstrap";

interface Props {
  i: any;
  SetToggle: any;
  Toggle: any;
  user: any;
  chat: any;
  copyText: any;
  setCurrentMessage: any;
}

const DropDownMenu: React.FC<Props> = ({
  i,
  SetToggle,
  Toggle,
  user,
  chat,
  copyText,
  setCurrentMessage,
}) => {
  //Open FriendsList Modal
  const handleShow = useModalStore((state) => state.handleShowFriendsListModal);

  const [DeleteMessage, { loading, error }] = useDeleteMessageMutation({
    refetchQueries: [{ query: GetChatsDocument }],

    onCompleted: () => toast.info(`👍 Messages Deleted`),
  });
  const [copiedText, setCopiedText] = useState("");
  const [SelectedMenu, setSelectedMenu] = useState(0);

  return (
    <ChatDropDown
      right={user?.id === chat.SenderId}
      className="dropdown align-self-start"
    >
      {error && <Alert variant="danger">{error.message}</Alert>}
      <div className="d-flex flex-column justify-content-between align-items-center">
        <a
          onClick={() => {
            setSelectedMenu(i);
            SetToggle(!Toggle);
          }}
        >
          <i className="ri-more-2-fill"></i>
        </a>
        <ReactButton MessageId={chat.id} />
      </div>

      <div
        className={
          SelectedMenu === i && Toggle === true
            ? "dropdown-menu show"
            : "dropdown-menu"
        }
      >
        <CopyAnchorStyles
          text={copyText}
          onCopy={() => {
            toast.success(`Success! Copied To Clipboard`);
            SetToggle(false);
          }}
        >
          <a
            onClick={() => {
              setCopiedText(copyText);
            }}
          >
            Copy
            <i className="ri-file-copy-line float-right text-muted"></i>
          </a>
        </CopyAnchorStyles>

        <a className="dropdown-item">
          Save
          <i className="ri-save-line float-right text-muted"></i>
        </a>
        <a
          onClick={() => {
            handleShow();
            setCurrentMessage(chat);
          }}
          className="dropdown-item"
        >
          Forward
          <i className="ri-chat-forward-line float-right text-muted"></i>
        </a>
        {user?.id === chat.ReceiverId && (
          <a
            onClick={() => {
              DeleteMessage({
                variables: {
                  MessageId: chat.id,
                },
              });
            }}
            className="dropdown-item"
          >
            {loading ? "wait..." : "Delete"}
            <i className="ri-delete-bin-line float-right text-muted"></i>
          </a>
        )}
      </div>
    </ChatDropDown>
  );
};

const ChatDropDown = styled(DropMenuStyles)<any>`
  .dropdown-menu {
    position: absolute;
    left: ${(props) => (props.right ? "5rem" : "-9rem")};
    top: 0rem !important;
  }
`;

const CopyAnchorStyles = styled(CopyToClipboard)`
  display: flex;
  justify-content: space-around;

  &:hover {
    background-color: white;
  }
  a {
    font-size: 1.5rem;
    color: #ffdc00;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`;

export default DropDownMenu;
