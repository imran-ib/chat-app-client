import React, { useEffect } from "react";
import DotMenu from "components/utils/Menu";
import { useConversationStore, useChatLeftSideStore } from "../ChatState";
// import { useConversationStore } from "components/ChatComponents/ChatState";
import FriendRequest from "../ChatComponents/TopBar/FriendRequest/FriendRequest";
import styled from "styled-components";

const SideBar = () => {
  const requests: any = useConversationStore((state) => state.request);
  const state:
    | {
        setProfile: () => void;
        setChats: () => void;
        setContacts: () => void;
        setSettings: () => void;
        setGroup: () => void;
      }
    | any = useChatLeftSideStore();

  return (
    <div className="side-menu flex-lg-column mr-lg-1">
      {/* <!-- LOGO --> */}
      <div className="navbar-brand-box">
        <a onClick={() => state.setChats()} className="logo logo-light">
          <span className="logo-sm">
            <img src="images/logo.svg" alt="" height="30" />
          </span>
        </a>
      </div>
      {/* <!-- end navbar-brand-box --> */}

      {/* <!-- Start side-menu nav --> */}
      <div className="flex-lg-column my-auto">
        <ul
          className="nav nav-pills side-menu-nav justify-content-center"
          role="tablist"
        >
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-trigger="hover"
            data-placement="top"
            title="Profile"
          >
            <a
              onClick={() => state.setProfile()}
              className={state.Profile ? "nav-link active" : "nav-link"}
              id="pills-user-tab"
              data-toggle="pill"
              role="tab"
            >
              <i className="ri-user-2-line"></i>
            </a>
          </li>
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-trigger="hover"
            data-placement="top"
            title="Chats"
          >
            <a
              onClick={() => state.setChats()}
              className={state.Chats ? "nav-link active" : "nav-link"}
              id="pills-chat-tab"
              data-toggle="pill"
              role="tab"
            >
              <i className="ri-message-3-line"></i>
            </a>
          </li>

          {/* <li
            className="nav-item"
            data-toggle="tooltip"
            data-trigger="hover"
            data-placement="top"
            title="Groups"
          >
            <a
              onClick={() => state.setGroup()}
              className="nav-link"
              id="pills-groups-tab"
              data-toggle="pill"

              role="tab"
            >
              <i className="ri-group-line"></i>
            </a>
          </li> */}
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-trigger="hover"
            data-placement="top"
            title="Contacts"
          >
            <a
              onClick={() => state.setContacts()}
              className={state.Contacts ? "nav-link active" : "nav-link"}
              id="pills-contacts-tab"
              data-toggle="pill"
              role="tab"
            >
              <i className="ri-contacts-line"></i>
            </a>
          </li>
          {requests.length ? (
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-trigger="hover"
              data-placement="top"
              title="Settings"
            >
              <FriendRequestIconStyles
                className={state.Settings ? "nav-link active" : "nav-link"}
                id="pills-setting-tab"
                data-toggle="pill"
                role="tab"
              >
                <FriendRequest />
                {/* <i className="ri-settings-2-line"></i> */}
              </FriendRequestIconStyles>
            </li>
          ) : null}
        </ul>
      </div>

      {/* <!-- end side-menu nav --> */}

      <div className="flex-lg-column d-none d-lg-block">
        <ul className="nav side-menu-nav justify-content-center">
          <li>
            <DotMenu />
          </li>
        </ul>
      </div>
      {/* <!-- Side menu user --> */}
      {/* <!-- end left sidebar-menu --> */}
    </div>
  );
};

const FriendRequestIconStyles = styled.a`
  & i {
    font-size: 2rem;
  }
`;

export default SideBar;
