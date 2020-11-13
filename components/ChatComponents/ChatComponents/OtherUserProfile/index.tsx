import React from "react";
import {
  useChatLeftSideStore,
  useConversationStore,
} from "components/ChatComponents/ChatState";
import { User } from "generated/graphql";
import { useUser } from "components/Auth/Auth";
import LastSeenComponent from "components/ChatComponents/Sidebarcomponents/MyProfile/UserLastSeen";
import AboutSection from "components/ChatComponents/Sidebarcomponents/MyProfile/UsersAboutSection";
import Media from "./Media";
import styled from "styled-components";

const OtherUserProfile: React.FC<any> = () => {
  const CurrentUser = useUser();

  let user: User | any = useConversationStore((state) => state.user);
  const otherUsersProfileActive: any = useChatLeftSideStore(
    (state) => state.otherUsersProfileActive
  );

  const setOtherUsersProfileClose: any = useChatLeftSideStore(
    (state) => state.setOtherUsersProfileClose
  );
  if (!user) {
    user = CurrentUser;
  }
  return (
    <ProfileStyles
      className={
        otherUsersProfileActive
          ? "user-profile-sidebar d-block"
          : "user-profile-sidebar "
      }
    >
      <div className="px-3 px-lg-4 pt-3 pt-lg-4">
        <div className="user-chat-nav text-right">
          <button
            onClick={() => {
              setOtherUsersProfileClose();
            }}
            type="button"
            className="btn nav-btn"
            id="user-profile-hide"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>

      <div className="text-center p-4 border-bottom">
        <div className="mb-4">
          <img
            src={user.avatar}
            className="rounded-circle avatar-lg img-thumbnail"
            alt=""
          />
        </div>

        <h5 className="font-size-16 mb-1 text-truncate">{user.username}</h5>
        <LastSeenComponent user={user} />
      </div>
      {/* <!-- End profile user --> */}

      {/* <!-- Start user-profile-desc --> */}
      <div className="p-4 user-profile-desc" data-simplebar>
        <div className="text-muted">
          <p className="mb-4">status</p>
        </div>

        <Heading>About</Heading>
        <div id="profile-user-accordion" className="custom-accordion">
          <AboutSection user={user} />
          <Media id={user.id} />

          {/* <!-- End Attached Files card --> */}
        </div>
        {/* <!-- end profile-user-accordion --> */}
      </div>
      {/* <!-- end user-profile-desc --> */}
    </ProfileStyles>
  );
};

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;
const ProfileStyles = styled.div`
  overflow: auto;
  z-index: 10000;
`;

export default OtherUserProfile;
