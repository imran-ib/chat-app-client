import React from "react";
import styled from "styled-components";
import { useGetChatsQuery } from "generated/graphql";
import { ChatSidebarSpinner } from "components/utils/Spinners/ChatSidebarSpinners";
import AddFriend from "components/ChatComponents/ChatComponents/TopBar/AddFriendButton/AddFriend";
import ListItem from "./ListItem";
import useWindowSize from "@rooks/use-window-size";
import ChatSearch from "./ChatSearch";

const Chats = () => {
  const { innerWidth } = useWindowSize();
  const { data, loading: ChatLoading } = useGetChatsQuery();
  if (ChatLoading) return <ChatSidebarSpinner />;
  const chats = data?.GetChats?.map((c) => c.friend);

  return (
    <div
      className="tab-pane fade show active"
      id="pills-chat"
      role="tabpanel"
      aria-labelledby="pills-chat-tab"
    >
      <div>
        <div className="px-4 pt-4">
          <div className="d-flex justify-content-between align-items-baseline">
            <h4 className="mb-4 ">Chats</h4>
            <div style={{ marginRight: `${innerWidth < 991 ? "2rem" : ""} ` }}>
              <AddFriend />
            </div>
          </div>
          <div className="search-box chat-search-box">
            <ChatSearch />
          </div>
          {/* Search Box */}
        </div>

        {/* <!-- end user status --> */}

        {/*  */}

        {/* <!-- Start chat-message-list --> */}
        <ContactList className="px-2">
          <h5 className="mb-3 px-3 font-size-16">Recent</h5>

          <div className="chat-message-list" data-simplebar>
            <ul className="list-unstyled chat-list chat-user-list">
              {chats?.map((user) => (
                <ListItem key={user.id} user={user} />
              ))}
            </ul>
          </div>
        </ContactList>
        {/* <!-- End chat-message-list --> */}

        {/*  */}
      </div>
    </div>
  );
};

const ContactList = styled.div`
  height: 600px;
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
export default Chats;
