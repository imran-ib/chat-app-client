import React from "react";
import Profile from "./MyProfile/Profile";
import Contacts from "./Contacts/Contacts";
import Chats from "./Chats/Chats";
import Settings from "./Settings/Settings";
import Group from "./Group/Group";
import { useChatLeftSideStore } from "../ChatState";

import styled from "styled-components";

const ChatLeftSide = () => {
  const state = useChatLeftSideStore();
  return (
    <LeftSideStyles>
      {state.Profile && <Profile />}
      {state.Chats && <Chats />}
      {state.Contacts && <Contacts />}
      {state.Settings && <Settings />}
      {state.Group && <Group />}
    </LeftSideStyles>
  );
};

const LeftSideStyles = styled.div`
  width: 38rem;
`;

export default ChatLeftSide;
