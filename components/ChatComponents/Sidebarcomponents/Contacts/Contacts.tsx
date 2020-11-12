import React, { useEffect } from "react";
import styled from "styled-components";
import { useFriendsQuery } from "generated/graphql";
import AddFriend from "components/ChatComponents/ChatComponents/TopBar/AddFriendButton/AddFriend";
import SearchFriends from "./SearchFriends";
import Friend from "./Friend";
import { useConversationStore } from "components/ChatComponents/ChatState";

//TODO Fetch Pending requests

const Contacts = () => {
  const dispatch = useConversationStore((state) => state.dispatch);
  const { data, loading, error, called } = useFriendsQuery();
  // @ts-ignore
  const Friends: any = data?.Friends?.map((fr) => fr.friend);

  useEffect(() => {
    !loading &&
      !error &&
      called &&
      //@ts-ignore
      dispatch({
        type: "FRIENDS",
        payload: { friends: Friends },
      });
  }, [data]);

  return (
    <>
      <div className="p-4">
        <div className="user-chat-nav float-right">
          <div
            data-toggle="tooltip"
            data-placement="bottom"
            title="Add Contact"
          >
            <AddFriend />
          </div>
        </div>
        <h4 className="mb-4">Contacts</h4>

        <SearchFriends />
      </div>
      <ContactsStyles
        className="tab-pane"
        id="pills-contacts"
        role="tabpanel"
        aria-labelledby="pills-contacts-tab"
      >
        <div>
          {/*  */}

          {/* <!-- Start contact lists --> */}
          <div className="p-4 chat-message-list chat-group-list" data-simplebar>
            <div>
              {!Friends?.length && (
                <div className="p-3 font-weight-bold text-primary">
                  You Don't Have Friends yet
                </div>
              )}

              <ul className="list-unstyled contact-list">
                {Friends?.map((friend: any) => (
                  <Friend key={friend.id} friend={friend} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContactsStyles>
    </>
  );
};

const ContactsStyles = styled.div`
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

export default Contacts;
