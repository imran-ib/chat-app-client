import React from "react";
import {
  useConversationStore,
  useChatLeftSideStore,
} from "components/ChatComponents/ChatState";
import { User } from "generated/graphql";
import { useUser } from "components/Auth/Auth";
import AddFriend from "./AddFriendButton/AddFriend";
import FriendRequest from "./FriendRequest/FriendRequest";
import Menu from "./Menu/Menu";

const TopBar: React.FC<any> = () => {
  const CurrentUser = useUser();
  let user: User | any = useConversationStore((state) => state.user);
  const setCloseChatForSmallScreen: any = useChatLeftSideStore(
    (state) => state.setCloseChatForSmallScreen
  );
  if (!user) {
    user = CurrentUser;
  }
  return (
    <>
      <div className="col-sm-4 col-8">
        <div className="media align-items-center">
          <div className="d-block d-lg-none mr-2">
            <a
              onClick={() => setCloseChatForSmallScreen()}
              className="user-chat-remove text-muted font-size-16 p-2"
            >
              <i className="ri-arrow-left-s-line"></i>
            </a>
          </div>
          <div className="mr-3">
            <img
              src={user?.avatar}
              className="rounded-circle avatar-xs"
              alt={user?.username}
            />
          </div>
          <div className="media-body overflow-hidden">
            <h5 className="font-size-16 mb-0 text-truncate">
              <a href="#" className="text-reset user-profile-show">
                {user?.username}
              </a>
              <i className="ri-record-circle-fill font-size-10 text-success d-inline-block ml-1"></i>
            </h5>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="col-sm-8 col-4">
        <ul className="list-inline user-chat-nav text-right d-flex justify-content-end align-items-center ">
          <li className="list-inline-item">
            <i className="ri-notification-2-fill mt-2 mr-3"></i>
          </li>
          <li className="list-inline-item">
            <FriendRequest />
          </li>

          <li className="list-inline-item d-none d-lg-inline-block">
            <AddFriend />
          </li>

          <Menu CurrentUser={CurrentUser} otherUser={user} />
        </ul>
      </div>
    </>
  );
};

export default TopBar;
