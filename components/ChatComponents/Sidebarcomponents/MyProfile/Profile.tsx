import React, { useState, useRef } from "react";
import { useUser } from "components/Auth/Auth";
import styled from "styled-components";
import { useOnClickOutside } from "components/utils/hooks/useClickOutside";
import { SRLWrapper } from "simple-react-lightbox";
import { customMedia } from "components/styles/Global";

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
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </DropDownMenu>
                </div>
              </DotsMenu>
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
            <p className="text-muted text-truncate mb-1">
              <i className="ri-record-circle-fill font-size-10 text-success mr-1 d-inline-block"></i>
              Active
            </p>
          </div>
          {/* End profile user  */}

          {/* Start user-profile-desc  */}
          <AboutSection
            className="p-4 user-profile-desc border-bottom"
            data-simplebar
          >
            <div id="profile-user-accordion-1" className="custom-accordion">
              {/* Accourdian */}
              <AboutList>
                <li>
                  User Name : <span>{user?.username}</span>
                </li>
                <li>
                  Email : <span>{user?.email}</span>
                </li>
                <li>
                  Location : <span>Riyadh KSA</span>
                </li>
                <li>
                  Total Friends : <span>205</span>
                </li>
                <li>
                  About Me : <span>Something</span>
                </li>
              </AboutList>

              {/* Accourdian */}
            </div>
          </AboutSection>
          <UserMedia>
            <h1>Media</h1>
            <div className="gallery">
              <SRLWrapper>
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
                <img src="/images/users/avatar-4.jpg" alt="" />
                <img src="/images/users/avatar-5.jpg" alt="" />
                <img src="/images/users/avatar-6.jpg" alt="" />
                <img src="/images/users/avatar-7.jpg" alt="" />
                <img src="/images/users/avatar-8.jpg" alt="" />
                <img src="/images/users/avatar-1.jpg" alt="" />
                <img src="/images/users/avatar-2.jpg" alt="" />
                <img src="/images/users/avatar-3.jpg" alt="" />
              </SRLWrapper>
            </div>
          </UserMedia>
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
const AboutSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  height: calc(100vh - 50rem);
  ${customMedia.lessThan("small")`
  height: calc(100vh - 30rem);
  `}
  margin-right:2rem;
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
const AboutList = styled.ul`
  text-align: left;
  li {
    margin: 2rem;
    span {
      color: #c9c9c9;
      margin-left: 1.5rem;
      text-align: right;
    }
  }
`;

const UserMedia = styled.div`
  margin-top: 1.5rem;
  h1 {
    text-align: center;
  }
  .gallery {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    img {
      cursor: pointer;
      width: 50px;
      height: 50px;
    }
  }
  height: 26rem;
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
export default Profile;
