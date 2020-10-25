import React from "react";
import { useConversationStore } from "components/ChatComponents/ChatState";
import { User } from "generated/graphql";
import { useUser } from "components/Auth/Auth";
import AddFriend from "./AddFriendButton/AddFriend";
import FriendRequest from "./FriendRequest/FriendRequest";

interface Props {
  ToggleOtherUser: boolean;
  setToggleOtherUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<Props> = ({ ToggleOtherUser, setToggleOtherUser }) => {
  const CurrentUser = useUser();
  let user: User | any = useConversationStore((state) => state.user);

  if (!user) {
    user = CurrentUser;
  }

  return (
    <>
      <div className="col-sm-4 col-8">
        <div className="media align-items-center">
          <div className="d-block d-lg-none mr-2">
            <a className="user-chat-remove text-muted font-size-16 p-2">
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
            <FriendRequest />
          </li>

          <li className="list-inline-item d-none d-lg-inline-block">
            <AddFriend />
          </li>

          <li className="list-inline-item">
            <div className="dropdown">
              <button
                className="btn nav-btn "
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="ri-more-fill mt-2"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a
                  onClick={() => setToggleOtherUser(!ToggleOtherUser)}
                  className="dropdown-item d-block d-lg-none user-profile-show"
                >
                  View profile
                  <i className="ri-user-2-line float-right text-muted"></i>
                </a>
                <a className="dropdown-item" href="#">
                  Archive
                  <i className="ri-archive-line float-right text-muted"></i>
                </a>
                <a className="dropdown-item" href="#">
                  Muted
                  <i className="ri-volume-mute-line float-right text-muted"></i>
                </a>
                <a className="dropdown-item" href="#">
                  Delete
                  <i className="ri-delete-bin-line float-right text-muted"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopBar;
