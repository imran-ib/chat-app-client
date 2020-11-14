import React, { useEffect } from "react";
import styled from "styled-components";
import { useFriendsQuery } from "generated/graphql";
import AddFriend from "components/ChatComponents/ChatComponents/TopBar/AddFriendButton/AddFriend";
import Friend from "./Friend";
import { useConversationStore } from "components/ChatComponents/ChatState";
import { AccountForm } from "components/styles/SharedStyles";

//TODO Fetch Pending requests

const Contacts = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useConversationStore((state) => state.dispatch);
  const { data, loading, error, called } = useFriendsQuery();
  // @ts-ignore
  const Friends: any = data?.Friends?.map((fr) => fr.friend);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? Friends
    : Friends.filter((Friend: { username: string }) =>
        Friend.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

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

        <div className="search-box chat-search-box">
          <SearchStyles>
            <div className="input-group input-group-lg rounded-lg position-relative">
              <div className="input-group-prepend">
                <button
                  className="btn btn-link text-decoration-none text-muted pr-1 position-absolute"
                  type="button"
                >
                  <i className="ri-search-line search-icon font-size-18"></i>
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search users.."
                value={searchTerm}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </SearchStyles>
        </div>
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
                {results?.map((friend: any) => (
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

export const SearchStyles = styled(AccountForm)`
  padding: 0;
  margin-top: 5rem;
  margin-left: 0;
  margin-right: 2.5rem;
  & button {
    right: 1.5rem;
    top: 0.5rem;
  }

  & input {
    padding: 2.5rem !important;
    margin-bottom: 0 !important;
  }
`;

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
