import React, { useState, useRef } from "react";
import { useOnClickOutside } from "components/utils/hooks/useClickOutside";
import { DropMenuStyles } from "components/styles/SharedStyles";
import styled from "styled-components";
import { useGetMessagesLazyQuery } from "generated/graphql";
import {
  useChatLeftSideStore,
  useConversationStore,
} from "components/ChatComponents/ChatState";
import useWindowSize from "@rooks/use-window-size";
import UnFriend from "components/ChatComponents/ChatComponents/TopBar/AddFriendButton/UnFriend";
import { toast } from "react-toastify";

interface Props {
  friend: any;
}

const Friend: React.FC<Props> = ({ friend }) => {
  // console.log("friend", friend);
  const ref = useRef();
  const [Show, setShow] = useState(false);
  useOnClickOutside(ref, () => setShow(false));
  const dispatch = useConversationStore((state) => state.dispatch);
  const setOpenChatForSmallScreen: any = useChatLeftSideStore(
    (state) => state.setOpenChatForSmallScreen
  );
  const setOtherUsersProfileActive: any = useChatLeftSideStore(
    (state) => state.setOtherUsersProfileActive
  );

  const { innerWidth } = useWindowSize();
  const IsSmallScreen = innerWidth <= 941;

  const [GetMessages] = useGetMessagesLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "SET_MESSAGES",
        payload: { messages: data.GetMessages },
      });
      if (data && IsSmallScreen) setOpenChatForSmallScreen();
    },
  });

  return (
    <li
      onClick={() => {
        GetMessages({
          variables: { from: friend.username },
        });

        //@ts-ignore
        dispatch({ type: "SET_USER", payload: { user: friend } });
      }}
    >
      {/* 
          //@ts-ignore */}
      <div ref={ref} className="media align-items-center position-relative">
        <div className="media-body">
          <h5 className="font-size-16 m-0">{friend?.username}</h5>
        </div>

        <div>
          <a
            onClick={(e) => {
              e.stopPropagation();
              setShow(!Show);
            }}
            className="text-muted "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <i className="ri-more-2-fill"></i>
          </a>
          <MenuStyles
            className={
              Show
                ? "dropdown-menu dropdown-menu-right show"
                : "dropdown-menu dropdown-menu-right"
            }
          >
            <a onClick={setOtherUsersProfileActive} className="dropdown-item">
              Profile
            </a>
            <a
              onClick={() => {
                toast.warn(`User Cannot Be Blocked For Now`);
              }}
              className="dropdown-item"
            >
              Block
            </a>
            <UnFriend otherUser={friend} />
          </MenuStyles>
        </div>
      </div>
    </li>
  );
};

const MenuStyles = styled(DropMenuStyles)`
  background-color: #292f3f;
`;

export default Friend;
