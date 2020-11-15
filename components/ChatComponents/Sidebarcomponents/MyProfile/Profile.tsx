import React, { useState, useRef } from "react";
import { useUser } from "components/Auth/Auth";
import styled from "styled-components";
import { useOnClickOutside } from "components/utils/hooks/useClickOutside";
import { customMedia } from "components/styles/Global";
import LastSeenComponent from "./UserLastSeen";
import Media from "./Media";
import AboutSection from "./UsersAboutSection";

const Profile = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  const user = useUser();
  // Call hook passing in the ref and a function to call on outside click
  const [ProfileEdit, setProfileEdit] = useState(false);
  useOnClickOutside(ref, () => setProfileEdit(false));

  return (
    <ProfileStyles className="chat-leftsidebar mr-lg-1">
      <div className="tab-content">
        {/* Start Profile tab-pane  */}
        <div
          className={"tab-pane active"}
          id="pills-user"
          role="tabpanel"
          aria-labelledby="pills-user-tab"
        >
          {/*  Start profile content */}
          <div>
            <div className="px-4 pt-4">
              {/* 
              <DotsMenu className="user-chat-nav float-right">
                <div
                  // @ts-ignore
                  ref={ref}
                  className={ProfileEdit ? "dropdown show" : "dropdown"}
                >
                  <a
                    onClick={() => setProfileEdit(!ProfileEdit)}
                    className="font-size-18 text-muted "
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="ri-more-2-fill"></i>
                  </a>
                  <DropDownMenu
                    className={
                      ProfileEdit
                        ? "dropdown-menu dropdown-menu-right show"
                        : "dropdown-menu dropdown-menu-right"
                    }
                  >
                    <a className="dropdown-item" >
                      Edit
                    </a>
                    <a className="dropdown-item" >
                      Action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >
                      Another action
                    </a>
                  </DropDownMenu>
                </div>
              </DotsMenu>
            */}
              <h4 className="mb-0">My Profile</h4>
            </div>
          </div>
          <div className="text-center p-4 border-bottom">
            <div className="mb-4">
              <img
                // @ts-ignore
                src={user?.avatar}
                className="rounded-circle avatar-lg img-thumbnail"
                alt={` ${user?.email} Avatar`}
              />
            </div>

            <h5 className="font-size-16 mb-1 text-truncate">
              {user?.username}
            </h5>

            <LastSeenComponent user={user} />
          </div>
          {/* End profile user  */}

          {/* Start user-profile-desc  */}
          <AboutSection user={user} />

          <Media />
        </div>
      </div>
    </ProfileStyles>
  );
};

const ProfileStyles = styled.div`
  font-size: 2rem;
`;

const DotsMenu = styled.div`
  ${customMedia.lessThan("small")`
  margin-right:2rem;
  `}
`;
const DropDownMenu = styled.div`
  background: #292f3f;
  & a {
    font-size: 1.2rem;
    color: #c9c9c9;
  }
`;

export default Profile;
