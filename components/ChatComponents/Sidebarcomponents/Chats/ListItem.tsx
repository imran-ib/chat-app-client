import React from "react";
import {
  useGetMessagesLazyQuery,
  useGetUsersBlockedStatusLazyQuery,
  useOtherUserQuery,
} from "generated/graphql";
import {
  useConversationStore,
  useChatLeftSideStore,
} from "components/ChatComponents/ChatState";
import useWindowSize from "@rooks/use-window-size";
import Moment from "react-moment";
import moment from "moment";
import { ChatSpinner } from "components/utils/Spinners/ChatSidebarSpinners";

const ListItem = ({ user: USER }: any) => {
  //   const user: User | any = useUser();
  const { loading, data } = useOtherUserQuery({
    variables: {
      userId: USER.id,
    },
    fetchPolicy: "no-cache",
    pollInterval: 5000,
  });

  const dispatch = useConversationStore((state) => state.dispatch);
  const messages: any = useConversationStore((state) => state.messages);
  const setOpenChatForSmallScreen: any = useChatLeftSideStore(
    (state) => state.setOpenChatForSmallScreen
  );
  const newMessagePillShow = useChatLeftSideStore(
    (state) => state.newMessagePillShow
  );
  const setnewMessagePillHide = useChatLeftSideStore(
    (state) => state.setnewMessagePillHide
  );

  const { innerWidth } = useWindowSize();
  const IsSmallScreen = innerWidth <= 941;

  const [GetUsersBlockedStatus] = useGetUsersBlockedStatusLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "USER_CHAT_BLOCKED_STATUS",
        payload: { status: data.GetUsersBlockedStatus },
      });
    },
  });

  const [GetMessages] = useGetMessagesLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "SET_MESSAGES",
        payload: { messages: data.GetMessages },
      });
      if (data && IsSmallScreen) setOpenChatForSmallScreen();
      //@ts-ignore
      setnewMessagePillHide();
    },
  });

  const LastMessageIndex = messages.length && messages.length - 1;
  const LastMessage = messages[LastMessageIndex];

  // NOTE 'user-status' class is responsible for green online status dot
  if (loading) return <ChatSpinner />;
  const user: any = data?.OtherUser;

  const LastSeen = moment(user?.lastSeen).unix() * 100;
  const currentTime = moment(new Date().toISOString()).unix() * 100;

  const Difference = currentTime - LastSeen;
  let Online;
  let active = false;
  if (Difference <= 5000) {
    Online = "online";
    active = true;
  } else {
    active = false;
    Online = <Moment date={user?.lastSeen} fromNow />;
  }

  return (
    <li
      onClick={() => {
        GetMessages({
          variables: { from: user.username },
        });

        GetUsersBlockedStatus({
          variables: { username: user.username },
        });

        //@ts-ignore
        dispatch({ type: "SET_USER", payload: { user } });
      }}
      key={user.id}
    >
      <a>
        <div className="media">
          <div className="chat-user-img online align-self-center mr-3">
            <img
              //@ts-ignore
              src={user.avatar}
              className="rounded-circle avatar-xs"
              alt="user image"
            />
            {active ? (
              <span className="user-status bg-success"></span>
            ) : (
              <span className="user-status bg-danger "></span>
            )}
          </div>

          <div className="media-body overflow-hidden">
            <h5 className="text-truncate font-size-15 mb-1">{user.username}</h5>
            <p className="chat-user-message text-truncate mb-0">
              {LastMessage?.SenderId === user.id ||
              LastMessage?.ReceiverId === user.id
                ? LastMessage?.content
                : "Hey! there I'm available"}
            </p>
          </div>
          <div className="font-size-11">
            {LastMessage?.SenderId === user.id ||
            LastMessage?.ReceiverId === user.id ? (
              <Moment date={LastMessage.createdAt} fromNow />
            ) : (
              ""
            )}
          </div>
          {newMessagePillShow && LastMessage?.SenderId === user.id && (
            <NotificationPill />
          )}
        </div>
      </a>
    </li>
  );
};

const NotificationPill: React.FC<any> = () => {
  return (
    <div className="unread-message">
      <span className="badge badge-soft-danger badge-pill">New</span>
    </div>
  );
};

export default ListItem;
