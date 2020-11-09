import React, { useState } from "react";
import { useConversationStore } from "components/ChatComponents/ChatState";
import styled from "styled-components";
import {
  Messages,
  User,
  useRestoreDeletedChatMutation,
} from "generated/graphql";
import MessagesComponent from "./Message";
import ImageMessage from "./Image";
import ModalComponent from "components/utils/Models/Modal";
import { useModalStore } from "components/ChatComponents/ChatState/ModalState";
import FriendListModal from "./FriendsListModal";
import { Alert } from "react-bootstrap";
import { useUser } from "components/Auth/Auth";


const ConversationStyles = styled.div`
  /* height: 600px; */
  overflow: auto;

  /* Scroll bar */
  ::-webkit-scrollbar {
    width: 0.4em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const Conversation = () => {
  const dispatch = useConversationStore((state) => state.dispatch);
 
  const CurrentUser = useUser();
  const [CurrentMessage, setCurrentMessage] = useState();
  const show = useModalStore((state) => state.showFriendsListModal);
  const [
    RestoreDeletedChat,
    { data, loading, error, called },
  ] = useRestoreDeletedChatMutation({
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "USER_CHAT_BLOCKED_STATUS",
        payload: { status: null },
      });
    },
  });
  const onHide = useModalStore((state) => state.onHideFriendsListModal);
  const user: User | any = useConversationStore((state) => state.user);
  const Messages: Messages | any = useConversationStore(
    (state) => state.messages
  );
  const GetUsersBlockedStatusData = useConversationStore(
    (state) => state.GetUsersBlockedStatusData
  );

  if (!Messages || !Messages.length || !user) return <p></p>;

  if (!loading && !error && called && data) {
    //@ts-ignore
    dispatch({
      type: "SET_MESSAGES",
      payload: { messages: data?.RestoreDeletedChat },
    });
  }

 

  return (
    <>
      <ModalComponent show={show} onHide={onHide}>
        <FriendListModal CurrentMessage={CurrentMessage} />
      </ModalComponent>
      {GetUsersBlockedStatusData && (
        <Alert
          onClick={() => {
            RestoreDeletedChat({
              variables: {
                //@ts-ignore
                blocker: CurrentUser?.id,
                blockee: user.id,
              },
            });
          }}
          className="text-center"
          variant="info"
        >
          Load Old Messages
        </Alert>
      )}

      <ConversationStyles
        className="chat-conversation p-3 p-lg-4"
        data-simplebar="init"
      >
        <ul className="list-unstyled mb-0">
          <li>
            <div className="chat-day-title"></div>
          </li>
          {Messages?.map((chat: any, i: number) => (
            <div key={i}>
              {!chat.image && (
                <MessagesComponent
                  setCurrentMessage={setCurrentMessage}
                  right={user.id === chat.SenderId}
                  chat={chat}
                  user={user}
                  i={i}
                />
              )}
              {/* image */}
              {chat.image && (
                <ImageMessage
                  setCurrentMessage={setCurrentMessage}
                  chat={chat}
                  user={user}
                  i={i}
                />
              )}
            </div>
          ))}
        </ul>
      </ConversationStyles>
    </>
  );
};

export default Conversation;
