import { AccountForm } from "components/styles/SharedStyles";
import React from "react";
import styled from "styled-components";

const SearchFriends = () => {
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
            />
          </div>
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
