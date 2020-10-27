import React, { useState } from "react";
import { useChatLeftSideStore } from "../ChatState";
import Conversation from "./Conversation";
import ChatInput from "./Input";
import OtherUserProfile from "./OtherUserProfile";
import TopBar from "./TopBar";

const ChatComponents = () => {
  //TODO Move this Chat State
  const [ToggleOtherUser, setToggleOtherUser] = useState();
  const openChatForSmallScreen = useChatLeftSideStore(
    (state) => state.openChatForSmallScreen
  );

  return (
    // 'user-chat-show' ⤵   add this class to open chat in small screen
    <div
      className={
        openChatForSmallScreen
          ? "user-chat w-100 user-chat-show"
          : "user-chat w-100"
      }
    >
      <div className="d-lg-flex">
        <div className="w-100 position-relative">
          <div className="p-3 p-lg-4 border-bottom">
            <div className="row align-items-center">
              <TopBar
                setToggleOtherUser={setToggleOtherUser}
                ToggleOtherUser={ToggleOtherUser}
              />
            </div>
          </div>

          <Conversation />

          <ChatInput />
        </div>
        <OtherUserProfile
          setToggleOtherUser={setToggleOtherUser}
          ToggleOtherUser={ToggleOtherUser}
        />
      </div>
    </div>
  );
};

export default ChatComponents;
