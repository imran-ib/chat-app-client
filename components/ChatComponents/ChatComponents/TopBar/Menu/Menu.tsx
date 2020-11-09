import React, { useState, useRef } from "react";
import useOutsideClick from "@rooks/use-outside-click";
import styled from "styled-components";
import {
  useChatLeftSideStore,
  useConversationStore,
} from "components/ChatComponents/ChatState";
import { DropMenuStyles } from "components/styles/SharedStyles";
import { useDeleteChatMutation, User } from "generated/graphql";
import { toast } from "react-toastify";
import UnFriend from "../AddFriendButton/UnFriend";

interface Props {
  CurrentUser: User | any;
  otherUser: User | any;
}

const Menu: React.FC<Props> = ({ CurrentUser, otherUser }) => {
  const dispatch = useConversationStore((state) => state.dispatch);
  const setProfile = useChatLeftSideStore((state) => state.setProfile);
  const [DeleteChat, { loading }] = useDeleteChatMutation({
    variables: {
      blockerId: CurrentUser.id,
      blockeeId: otherUser.id,
    },
    onCompleted: () => {
      //@ts-ignore
      dispatch({
        type: "SET_MESSAGES",
        payload: { messages: [] },
      });
      //@ts-ignore
      setProfile();
      toast.success(`All Your Messages in this chat have been deleted`);
    },
    onError: (err) => toast.error(err.message),
  });
  const setOtherUsersProfileActive: any = useChatLeftSideStore(
    (state) => state.setOtherUsersProfileActive
  );
  const [showDropDown, setShowDropDown] = useState(false);
  const ref: any = useRef();
  useOutsideClick(ref, () => setShowDropDown(false));

  return (
    <OtherUserDropMenuStyles>
      <li className="list-inline-item">
        <div ref={ref} className={showDropDown ? "dropdown show" : "dropdown"}>
          <button
            onClick={() => setShowDropDown(!showDropDown)}
            className="btn nav-btn "
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={showDropDown ? "true" : "false"}
          >
            <i className="ri-more-2-fill mt-2"></i>
          </button>
          <div
            className={
              showDropDown
                ? "dropdown-menu dropdown-menu-right show"
                : "dropdown-menu dropdown-menu-right"
            }
          >
            <a
              onClick={() => {
                setOtherUsersProfileActive();
                setShowDropDown(false);
              }}
              className="dropdown-item d-block  user-profile-show"
            >
              View profile
            </a>
            <a
              onClick={() => {
                DeleteChat();
              }}
              className="dropdown-item"
              href="#"
            >
              {loading ? "Deleting.." : "Delete Chat"}
            </a>
            <UnFriend otherUser={otherUser} />
          </div>
        </div>
      </li>
    </OtherUserDropMenuStyles>
  );
};

const OtherUserDropMenuStyles = styled(DropMenuStyles)``;

export default Menu;
