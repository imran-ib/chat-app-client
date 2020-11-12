import React from "react";
import {
  useConversationStore,
  useChatLeftSideStore,
} from "components/ChatComponents/ChatState";
import styled from "styled-components";
import { useGetMessagesLazyQuery } from "generated/graphql";
import useWindowSize from "@rooks/use-window-size";
import { useForwardMessageMutation } from "generated/graphql";
import { ChatSpinner } from "components/utils/Spinners/ChatSidebarSpinners";
import Alert from "react-bootstrap/Alert";
import { useUser } from "components/Auth/Auth";
import { useModalStore } from "components/ChatComponents/ChatState/ModalState";

interface Props {
  CurrentMessage: any;
}

const FriendListModal: React.FC<Props> = ({ CurrentMessage }) => {
  const CurrentUser = useUser();
  const dispatch = useConversationStore((state) => state.dispatch);
  const Friends: any = useConversationStore((state) => state.friends);
  const setOpenChatForSmallScreen: any = useChatLeftSideStore(
    (state) => state.setOpenChatForSmallScreen
  );
  const handleClose = useModalStore(
    (state) => state.handleCloseFriendsListModal
  );

  const [ForwardMessage, { loading, error }] = useForwardMessageMutation();
  const { innerWidth } = useWindowSize();
  const IsSmallScreen = innerWidth <= 941;
  const [GetMessages] = useGetMessagesLazyQuery({
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "SET_MESSAGES",
        payload: { messages: data.GetMessages },
      });
      if (data && IsSmallScreen) setOpenChatForSmallScreen();
    },
  });

  if (!Friends.length) return <p>No User Found</p>;

  if (loading) return <ChatSpinner />;

  if (error)
    return (
      <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
        {error.message}
      </Alert>
    );

  return (
    <ListItemStyled className="list-unstyled chat-list chat-user-list">
      {" "}
      {Friends.map((user: any) => (
        <li
          onClick={() => {
            ForwardMessage({
              variables: {
                //@ts-ignore
                Receiver: user.username,
                //@ts-ignore
                Sender: CurrentUser.username,
                content: CurrentMessage.content,
                image: CurrentMessage.image,
              },
            });

            GetMessages({
              variables: { from: user.username },
            });
            //@ts-ignore
            dispatch({ type: "SET_USER", payload: { user } });
            handleClose();
          }}
          key={user.id}
        >
          <a>
            <div className="media">
              <div className="chat-user-img online align-self-center mr-3">
                <img
                  //@ts-ignore
                  src={user.avatar}
                  className="rounded-circle avatar-xs"
                  alt="user image"
                />
                <span className="user-status"></span>
              </div>

              <div className="media-body overflow-hidden">
                <h5 className="text-truncate font-size-15 mb-1">
                  {user.username}
                </h5>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ListItemStyled>
  );
};

const ListItemStyled = styled.ul``;

export default FriendListModal;
