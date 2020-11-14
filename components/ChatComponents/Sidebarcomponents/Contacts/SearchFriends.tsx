import React, { useState } from "react";
import { AccountForm } from "components/styles/SharedStyles";
import styled from "styled-components";

interface Props {
  Friends: {
    MessagesRecieved: [];
    MessagesSent: [];
    avatar: string;
    email: string;
    id: number;
    isActive: boolean;
    lastSeen: string;
    lastTyped: string;
    username: string;
  }[];
}

const SearchFriends: React.FC<Props> = ({ Friends }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? Friends
    : Friends.filter((Friend) =>
        Friend.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
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
          <ul>
            {results.length > 0 &&
              results.map((term) => <li key={term.id}>{term?.username}</li>)}
          </ul>
        </SearchStyles>
      </div>
      {/* <!-- End search-box --> */}
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
export default SearchFriends;
