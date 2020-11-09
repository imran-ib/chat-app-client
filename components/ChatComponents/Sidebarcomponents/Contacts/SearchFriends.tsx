import React from "react";

const SearchFriends = () => {
  return (
    <>
      <div className="search-box chat-search-box">
        <div className="input-group bg-light  input-group-lg rounded-lg">
          <div className="input-group-prepend">
            <button
              className="btn btn-link text-decoration-none text-muted pr-1"
              type="button"
            >
              <i className="ri-search-line search-icon font-size-18"></i>
            </button>
          </div>
          <input
            type="text"
            className="form-control bg-light "
            placeholder="Search users.."
          />
        </div>
      </div>
      {/* <!-- End search-box --> */}
    </>
  );
};
export default SearchFriends;
